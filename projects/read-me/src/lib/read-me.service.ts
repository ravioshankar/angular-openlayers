import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadMeService {

  private validYouTubeOptions = [
    'default',
    'mqdefault',
    'hqdefault',
    'sddefault',
    'maxresdefault'
  ];



  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {
  }

  public embed(url: any, options?: any): any {
    let id;
    url = new URL(url);

    id = this.detectYoutube(url);
    if (id) {
      return this.embed_youtube(id, options);
    }
  }

  public embed_youtube(id: string, options?: any): string {
    options = this.parseOptions(options);

    return this.sanitize_iframe('<iframe src="https://www.youtube.com/embed/'
      + id + options.query + '"' + options.attr
      + ' frameborder="0" allowfullscreen></iframe>');
  }


  public embed_image(url: any, options?: any): any {
    let id;

    url = new URL(url);

    id = this.detectYoutube(url);
    if (id) {
      return this.embed_youtube_image(id, options);
    }
  }

  private embed_youtube_image(id: string, options?: any): any {
    if (typeof options === 'function') {
      options = {};
    }
    options = options || {};

    options.image = this.validYouTubeOptions.indexOf(options.image) > 0 ? options.image : 'default';

    const src = 'https://img.youtube.com/vi/' + id + '/' + options.image + '.jpg';

    const result = {
      link: src,
      html: '<img src="' + src + '"/>'
    };

    return new Promise((resolve) => {
      resolve(result);
    });
  }


  private parseOptions(options: any): any {
    let queryString = '',
      attributes = '';

    if (options && options.hasOwnProperty('query')) {
      queryString = '?' + this.serializeQuery(options.query);
    }

    if (options && options.hasOwnProperty('attr')) {
      const temp = <any>[];

      Object.keys(options.attr).forEach(function (key) {
        temp.push(key + '="' + (options.attr[key]) + '"');
      });

      attributes = ' ' + temp.join(' ');
    }
    return {
      query: queryString,
      attr: attributes
    };
  }

  private serializeQuery(query: any): any {
    const queryString: any = [];

    for (const p in query) {
      if (query.hasOwnProperty(p)) {
        queryString.push(encodeURIComponent(p) + '=' + encodeURIComponent(query[p]));
      }
    }

    return queryString.join('&');
  }

  private sanitize_iframe(iframe: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(iframe);
  }

  private detectYoutube(url: any): string {
    if (url.hostname.indexOf('youtube.com') > -1) {
      return url.search.split('=')[1];
    }

    if (url.hostname === 'youtu.be') {
      return url.pathname.split('/')[1];
    }

    return '';
  }

}
