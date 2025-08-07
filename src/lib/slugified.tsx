
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')      
    .replace(/\s+/g, '-')          
    .replace(/--+/g, '-')          
    .replace(/^-+|-+$/g, '');      
}

export function fromSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}