import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPost } from '../ipost';
import postsData from '../data/posts.json';

@Component({
  selector: 'app-blog-details',
  imports: [RouterLink],
  templateUrl: './blog-details.component.html',
})
export class BlogDetailsComponent {
  allPosts: IPost[] = postsData.posts;
  post: IPost | undefined = postsData.posts[0];
  relatedPosts: IPost[] = postsData.posts.slice(1, 4);

  parsedBlocks: { isHeading: boolean; text: string; id: string }[] = [];

  arabicMonths = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];
  initContent = this.post ? this.parseContent(this.post.content) : null;
  parseContent(content: string): void {
    const blocks = content.split('\n\n');
    let headingCount = 0;

    this.parsedBlocks = [];

    for (const block of blocks) {
      if (block.startsWith('## ')) {
        const headingText = block.replace('## ', '').trim();
        const sectionId = 'section-' + headingCount++;

        this.parsedBlocks.push({ isHeading: true, text: headingText, id: sectionId });
      } else {
        this.parsedBlocks.push({ isHeading: false, text: block.trim(), id: '' });
      }
    }
  }

  loadPost(slug: string): void {
    this.post = this.allPosts.find((p) => p.slug === slug);
    if (this.post) {
      this.parseContent(this.post.content);
      this.relatedPosts = this.allPosts
        .filter((p) => p.category === this.post!.category && p.slug !== this.post!.slug)
        .slice(0, 3);
    }
  }

  formatDate(dateString: string): string {
    const [year, month, day] = dateString.split('-');
    return day + ' ' + this.arabicMonths[+month - 1] + ' ' + year;
  }

  ShortDate(dateString: string): string {
    const [, month, day] = dateString.split('-');
    return day + ' ' + this.arabicMonths[+month - 1];
  }
}
