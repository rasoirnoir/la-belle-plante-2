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
    public id?: string
  ) {}

  /**
   * Construit un objet enregistrable en bdd.
   * @returns
   */
  toBddObject = () => {
    console.log('transformation !!  ', this);
    return {
      id: this.id,
      product_name: this.name,
      product_price: this.price,
      product_instock: this.instock,
      product_qty: this.quantity,
      product_breadcrumb_label: this.category,
      product_url_picture: this.urlPicture,
      product_rating: this.rating,
    };
  };

  /**
   * Build une plante à partir des données brutes provenant de la bdd
   * @param plant
   * @returns
   */
  public static build(plant: any): Plant {
    return new Plant(
      plant['product_name'],
      plant['product_price'],
      plant['product_qty'],
      plant['product_instock'],
      plant['product_breadcrumb_label'],
      plant['product_url_picture'],
      plant['product_rating'],
      plant['id']
    );
  }
}
