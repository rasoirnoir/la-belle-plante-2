import { Category } from './Category';

export class Plant {
  constructor(
    public name: string = '',
    public price: number = 1,
    public quantity: number = 0,
    public instock: boolean = true,
    public category: Category = Category['plantes vertes'],
    public urlPicture: string = 'https://picsum.photos/id/18/200/300',
    public rating: number = 0,
    public id?: number
  ) {}
}
