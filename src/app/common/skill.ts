export class Skill{

  public name : string | undefined;
  public logo : string | undefined;
  public site : string | undefined;


  constructor(name: string | undefined, logo: string | undefined, site: string | undefined) {
    this.name = name;
    this.logo = logo;
    this.site = site;
  }


}
