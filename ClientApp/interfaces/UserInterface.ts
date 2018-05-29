export interface UserInterface {
  sub: string | null,
  family_name: string | null,
  given_name: string | null,
  locale: string | null,
  name: string | null,
  nickname: string | null,
  picture: string | null 
}

export class User implements UserInterface {
  sub = null;
  family_name = null;
  given_name = null;
  locale = null;
  name = null;
  nickname = null;
  picture = null;
}