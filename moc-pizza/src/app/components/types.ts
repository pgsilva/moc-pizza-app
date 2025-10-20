interface Item {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface HorizontalCardListProps {
  title?: string;
  items: Item[];
}

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}