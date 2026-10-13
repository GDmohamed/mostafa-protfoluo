#!/usr/bin/env python3
"""
إضافة مشروع جديد لقسم التصميم بأمر واحد.

مثال:
  python add_project.py --section "Social Media" --title "Brand X: Social Campaign" --folder "C:/شغل/brandx"

الاختيارات:
  --section   Branding | Social Media | Packaging | Print   (الافتراضي: Social Media)
  --title     اسم المشروع
  --folder    فولدر فيه صور المشروع (بترتب بالاسم)
  --cover     صورة الغلاف (اختياري، الافتراضي أول صورة)
  --year / --client / --desc   اختياري
  --half      يعرض الصور في عمود متوسط (مناسب للبوستات المربعة)
  --last      يحط المشروع في آخر القسم (الافتراضي: أول القسم)
"""
import argparse, json, re, shutil, sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    Image = None

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data" / "design.js"
EXT = {".jpg", ".jpeg", ".png", ".webp"}

def slug(t):
    s = re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")
    return s or "project"

def nat(p):
    return [int(x) if x.isdigit() else x.lower() for x in re.split(r"(\d+)", p.name)]

def save(src, dst, maxw=None):
    if Image:
        im = Image.open(src).convert("RGB")
        if maxw and im.width > maxw:
            im.thumbnail((maxw, maxw * 4))
        im.save(dst, quality=88, optimize=True)
    else:
        shutil.copy(src, dst)

ap = argparse.ArgumentParser()
ap.add_argument("--section", default="Social Media")
ap.add_argument("--title", required=True)
ap.add_argument("--folder", required=True)
ap.add_argument("--cover")
ap.add_argument("--year", default="2026")
ap.add_argument("--client")
ap.add_argument("--desc")
ap.add_argument("--half", action="store_true")
ap.add_argument("--last", action="store_true")
a = ap.parse_args()

src = Path(a.folder)
imgs = sorted([p for p in src.iterdir() if p.suffix.lower() in EXT], key=nat)
if not imgs:
    sys.exit("مفيش صور في الفولدر ده")

text = DATA.read_text(encoding="utf-8")
m = re.search(r"['\"]%s['\"]\s*:\s*\[\n" % re.escape(a.section), text)
if not m:
    sys.exit("القسم مش موجود: " + a.section)

rel = "images/design/%s/%s" % (slug(a.section), slug(a.title))
out = ROOT / rel
if out.exists():
    sys.exit("المشروع ده موجود قبل كده: " + rel)
out.mkdir(parents=True)

cover_src = Path(a.cover) if a.cover else imgs[0]
save(cover_src, out / "cover.jpg", 2000)
gallery = []
for i, p in enumerate(imgs, 1):
    save(p, out / ("%02d.jpg" % i))
    g = {"src": "%s/%02d.jpg" % (rel, i)}
    if a.half:
        g["half"] = True
    gallery.append(g)

entry = {"title": a.title, "year": a.year}
if a.client: entry["client"] = a.client
if a.desc: entry["description"] = a.desc
entry["cover"] = rel + "/cover.jpg"
entry["gallery"] = gallery
blk = "\n".join("    " + l for l in json.dumps(entry, indent=2, ensure_ascii=False).splitlines()) + ",\n"

if a.last:
    # أول ] بعد بداية القسم
    close = text.index("\n  ]", m.end())
    prev = text[m.end():close].rstrip()
    if prev:
        text = text[:m.end()] + prev + ",\n" + blk.rstrip(",\n") + text[close:]
    else:
        text = text[:m.end()] + blk.rstrip(",\n") + text[close:]
else:
    text = text[:m.end()] + blk + text[m.end():]

DATA.write_text(text, encoding="utf-8")
print("تمت الإضافة: %s (%d صورة) في %s" % (a.title, len(imgs), a.section))
