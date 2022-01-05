import { UserModel } from "api/users/type";

export const filterUser = (users: UserModel[], value: string): UserModel[] => {
  return users.filter(
    ({ name, username, email, id, address, phone, website, company }) =>
      name.toLowerCase().includes(value.toLowerCase()) ||
      username.toLowerCase().includes(value.toLowerCase()) ||
      email.toLowerCase().includes(value.toLowerCase()) ||
      id === parseInt(value) ||
      address?.street.toLowerCase().includes(value.toLowerCase()) ||
      address?.suite.toLowerCase().includes(value.toLowerCase()) ||
      address?.city.toLowerCase().includes(value.toLowerCase()) ||
      address?.zipcode.toLowerCase().includes(value.toLowerCase()) ||
      address?.geo.lat.toLowerCase().includes(value.toLowerCase()) ||
      address?.geo.lng.toLowerCase().includes(value.toLowerCase()) ||
      phone?.toLowerCase().includes(value.toLowerCase()) ||
      website?.toLowerCase().includes(value.toLowerCase()) ||
      company?.name.toLowerCase().includes(value.toLowerCase()) ||
      company?.catchPhrase.toLowerCase().includes(value.toLowerCase()) ||
      company?.bs.toLowerCase().includes(value.toLowerCase())
  ) as UserModel[];
};
