import {Pipe} from '@angular/core';

@Pipe({
  name: 'TrailTextPipe'
})
export  class TrailTextPipe {
  transform(content : string) {
    return content ? String(content).replace(/<[^>]+>/gm, '') : '';
  }
}