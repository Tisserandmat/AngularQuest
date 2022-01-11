export class Skill{
  private _name : string | undefined;
  private _logo : string | undefined;
  private _site : string | undefined;


  constructor(name: string | undefined, logo: string | undefined, site: string | undefined) {
    this._name = name;
    this._logo = logo;
    this._site = site;
  }


  get name(): string | undefined {
    return this._name;
  }

  set name(value: string | undefined) {
    this._name = value;
  }

  get logo(): string | undefined {
    return this._logo;
  }

  set logo(value: string | undefined) {
    this._logo = value;
  }

  get site(): string | undefined {
    return this._site;
  }

  set site(value: string | undefined) {
    this._site = value;
  }
}
