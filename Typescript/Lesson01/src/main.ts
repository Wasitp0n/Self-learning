interface Shape {
  area: number;
  perimeter: number;
  angles: number;
  largerThan(Shape): boolean;
}

class Square implements Shape {
  w: number;
  h: number;

  constructor(w: number, h: number) {
    this.w = w;
    this.h = w;
  }

  area(): number {
    return this.w * this.h;
  }
}

class rectangle implements Shape {}

class Circle implements Shape {}
