import {Skill} from "./skill";

export class Developer {

  private _lastname: string | undefined;
  private _firstname: string | undefined;
  private _age: number | undefined;
  private _sexe: string | undefined;
  private _bio: string | undefined;
  private _skills: Skill[] | undefined;


  constructor(lastname: string | undefined, firstname: string | undefined, age: number | undefined,
              sexe: string | undefined, bio: string | undefined, skills: Skill[] | undefined) {
    this._lastname = lastname;
    this._firstname = firstname;
    this._age = age;
    this._sexe = sexe;
    this._bio = bio;
    this._skills = skills;
  }


  get lastname(): string | undefined {
    return this._lastname;
  }

  set lastname(value: string | undefined) {
    this._lastname = value;
  }

  get firstname(): string | undefined {
    return this._firstname;
  }

  set firstname(value: string | undefined) {
    this._firstname = value;
  }

  get age(): number | undefined {
    return this._age;
  }

  set age(value: number | undefined) {
    this._age = value;
  }

  get sexe(): string | undefined {
    return this._sexe;
  }

  set sexe(value: string | undefined) {
    this._sexe = value;
  }

  get bio(): string | undefined {
    return this._bio;
  }

  set bio(value: string | undefined) {
    this._bio = value;
  }

  get skills(): Skill[] | undefined {
    return this._skills;
  }

  set skills(value: Skill[] | undefined) {
    this._skills = value;
  }
}
