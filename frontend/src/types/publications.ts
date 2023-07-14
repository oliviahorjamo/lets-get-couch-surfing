
export type PublicationInputAttributes = Omit<
  PublicationAttributes,
  "id" | "createdAt" | "updatedAt"
>;

export type PublicationOutputAttributes = Required<PublicationAttributes>;

export interface PublicationAttributes {
  id: number,
  createdBy: string,
  title: string,
  message: string,
  createdAt?: Date,
  updatedAt?: Date,
  lat: number | null,
  lon: number | null
}
