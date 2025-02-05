const CDN = "https://cdn2.thecatapi.com"

export const getImageUrl = id => {
	return `${CDN}/images/${id}.jpg`
}

export class Cat {
  constructor(id, name, description, reference_image_id) {
    this.id = id
    this.name = name
    this.description = description
    this.reference_image_id = reference_image_id

    this.imageUrl = getImageUrl(this.reference_image_id)
  }
}

export const createCat = ({ id, name, description, reference_image_id }) => new Cat(id, name, description, reference_image_id);
