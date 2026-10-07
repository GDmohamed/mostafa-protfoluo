/* ============================================================
   قسم الفيديو (VIDEO)
   كل مجموعة بين [ ] هي قسم فرعي. ضع مشروعك داخل القسم الصح فقط.
   الحقول: title (إلزامي) + cover (إلزامي: صورة الغلاف)
   اختيارية: year, client, description, challenge, direction, result,
             deliverables ('شعار;ألوان;خطوط')، palette (٤ ألوان)، process (['بحث','فكرة','تصميم','تسليم'])،
             gallery (صور/فيديوهات تظهر في قسم "العمل"): [{src:'...', caption:'...'}]
   أي حقل تسيبه فاضي يختفي من الصفحة.
   الصور في: images/video/<اسم-القسم-الفرعي>/<اسم-المشروع>/
   ============================================================ */
window.VIDEO_PROJECTS = {
  'Video Editing': [
    /* مثال، انسخه وعدّل: 
    {
      title: 'اسم المشروع', year: '2026', client: 'اسم العميل',
      description: 'جملة أو جملتين عن المشروع.',
      challenge: 'ما المشكلة التي كان لازم تتحل؟',
      direction: 'الفكرة والاتجاه البصري.',
      result: 'النتيجة النهائية.',
      deliverables: 'مخرج 1;مخرج 2;مخرج 3',
      cover: 'images/video/video-editing/اسم-المشروع/cover.jpg',
      video: 'videos/video/video-editing/اسم-المشروع.mp4',   // اختياري: يشتغل عند تمرير الماوس
      poster: 'images/video/video-editing/اسم-المشروع/poster.jpg',
      gallery: [
        { src: 'images/video/video-editing/اسم-المشروع/01.jpg', caption: 'وصف' }
      ]
    },
    */
  ],

  'Motion Graphics': [
    /* مثال، انسخه وعدّل: 
    {
      title: 'اسم المشروع', year: '2026', client: 'اسم العميل',
      description: 'جملة أو جملتين عن المشروع.',
      challenge: 'ما المشكلة التي كان لازم تتحل؟',
      direction: 'الفكرة والاتجاه البصري.',
      result: 'النتيجة النهائية.',
      deliverables: 'مخرج 1;مخرج 2;مخرج 3',
      cover: 'images/video/motion-graphics/اسم-المشروع/cover.jpg',
      video: 'videos/video/motion-graphics/اسم-المشروع.mp4',   // اختياري: يشتغل عند تمرير الماوس
      poster: 'images/video/motion-graphics/اسم-المشروع/poster.jpg',
      gallery: [
        { src: 'images/video/motion-graphics/اسم-المشروع/01.jpg', caption: 'وصف' }
      ]
    },
    */
  ],

  'Animation': [
    /* مثال، انسخه وعدّل: 
    {
      title: 'اسم المشروع', year: '2026', client: 'اسم العميل',
      description: 'جملة أو جملتين عن المشروع.',
      challenge: 'ما المشكلة التي كان لازم تتحل؟',
      direction: 'الفكرة والاتجاه البصري.',
      result: 'النتيجة النهائية.',
      deliverables: 'مخرج 1;مخرج 2;مخرج 3',
      cover: 'images/video/animation/اسم-المشروع/cover.jpg',
      video: 'videos/video/animation/اسم-المشروع.mp4',   // اختياري: يشتغل عند تمرير الماوس
      poster: 'images/video/animation/اسم-المشروع/poster.jpg',
      gallery: [
        { src: 'images/video/animation/اسم-المشروع/01.jpg', caption: 'وصف' }
      ]
    },
    */
  ],

  'Reels': [
    /* مثال، انسخه وعدّل: 
    {
      title: 'اسم المشروع', year: '2026', client: 'اسم العميل',
      description: 'جملة أو جملتين عن المشروع.',
      challenge: 'ما المشكلة التي كان لازم تتحل؟',
      direction: 'الفكرة والاتجاه البصري.',
      result: 'النتيجة النهائية.',
      deliverables: 'مخرج 1;مخرج 2;مخرج 3',
      cover: 'images/video/reels/اسم-المشروع/cover.jpg',
      video: 'videos/video/reels/اسم-المشروع.mp4',   // اختياري: يشتغل عند تمرير الماوس
      poster: 'images/video/reels/اسم-المشروع/poster.jpg',
      gallery: [
        { src: 'images/video/reels/اسم-المشروع/01.jpg', caption: 'وصف' }
      ]
    },
    */
  ],

  'Commercial': [
    /* مثال، انسخه وعدّل: 
    {
      title: 'اسم المشروع', year: '2026', client: 'اسم العميل',
      description: 'جملة أو جملتين عن المشروع.',
      challenge: 'ما المشكلة التي كان لازم تتحل؟',
      direction: 'الفكرة والاتجاه البصري.',
      result: 'النتيجة النهائية.',
      deliverables: 'مخرج 1;مخرج 2;مخرج 3',
      cover: 'images/video/commercial/اسم-المشروع/cover.jpg',
      video: 'videos/video/commercial/اسم-المشروع.mp4',   // اختياري: يشتغل عند تمرير الماوس
      poster: 'images/video/commercial/اسم-المشروع/poster.jpg',
      gallery: [
        { src: 'images/video/commercial/اسم-المشروع/01.jpg', caption: 'وصف' }
      ]
    },
    */
  ]
};
