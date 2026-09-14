import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  stats = [
    { icon: 'fa-users', value: '+2مليون', label: 'قارئ شهرياً' },
    { icon: 'fa-newspaper', value: '+500', label: 'مقالة منشورة' },
    { icon: 'fa-pen-nib', value: '+50', label: 'كاتب خبير' },
    { icon: 'fa-book-open', value: '+15', label: 'تصنيف' },
  ];

  values = [
    { icon: 'fa-bullseye', title: 'الجودة أولاً', description: 'محتوى مدروس ومكتوب بخبرة' },
    { icon: 'fa-bolt', title: 'تركيز عملي', description: 'أمثلة واقعية يمكنك تطبيقها اليوم' },
    { icon: 'fa-handshake', title: 'المجتمع', description: 'تعلم مع آلاف المصورين' },
    {
      icon: 'fa-arrows-rotate',
      title: 'دائماً محدث',
      description: 'أحدث الاتجاهات وأفضل الممارسات',
    },
  ];

  team = [
    {
      name: 'سالم أحمد',
      role: 'مصور محترف',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'محمد علي',
      role: 'مصور بورتريه',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'إبراهيم حسن',
      role: 'مصور طبيعة',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'داود خالد',
      role: 'مدرب تصوير',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'ليث محمود',
      role: 'فنان بصري',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'جمال عبدالله',
      role: 'مصور ومراجع تقني',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'خالد الفيصل',
      role: 'مصور فلكي',
      avatar:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'نادر سعيد',
      role: 'مصور شوارع',
      avatar:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'هاني الشمري',
      role: 'مصور طعام',
      avatar:
        'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'عمر الراشد',
      role: 'مصور حياة برية',
      avatar:
        'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'فارس العلي',
      role: 'فنان فوتوغرافي',
      avatar:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'سامي الحربي',
      role: 'خبير تعديل صور',
      avatar:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'رامي الخطيب',
      role: 'مصور ماكرو',
      avatar:
        'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'باسم المصري',
      role: 'مصور فني',
      avatar:
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'منصور الزهراني',
      role: 'مصور زفاف',
      avatar:
        'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'فيصل الدوسري',
      role: 'مصور جوي',
      avatar:
        'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'لؤي الصالح',
      role: 'مصور تجاري',
      avatar:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'طارق النعيمي',
      role: 'مصور معماري',
      avatar:
        'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'أحمد الشهري',
      role: 'مصور رياضي',
      avatar:
        'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'ماجد القحطاني',
      role: 'مصور استوديو',
      avatar:
        'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'ياسر العتيبي',
      role: 'مصور رحالة',
      avatar:
        'https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'دحام الحسيني',
      role: 'فنان بصري',
      avatar:
        'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'نايف المطيري',
      role: 'مصور مواليد',
      avatar:
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'عبدالله الغامدي',
      role: 'مصور عقارات',
      avatar:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'كريم الفهد',
      role: 'خبير تقني',
      avatar:
        'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'سلطان الراجحي',
      role: 'فنان تصوير',
      avatar:
        'https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'فهد السبيعي',
      role: 'مراجع معدات',
      avatar:
        'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'راشد الجاسر',
      role: 'فنان بصري',
      avatar:
        'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face',
    },
  ];
}
