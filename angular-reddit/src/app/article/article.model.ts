export class Article{
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number){
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): boolean{
    this.votes += 1;
    return false;
  }

  voteDown(): boolean{
    this.votes -=1;

    if(this.votes < 0)
      this.votes = 0;

    return false;
  }

  domain(): string{
    try{
      //예: http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      //예: foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    }catch (err){
      return null;
    }
  }
}
