import { DadosProps } from "@/types/props";

export async function getPageData(): Promise<DadosProps> {
  const response = await fetch(`https://api.cosmicjs.com/v3/buckets/portfolio-production-9d9eab70-6c8f-11f0-8787-bd4453357309/objects/6888e8aad5e8b76ec441c7d6?pretty=true&read_key=${process.env.COSMIC_API_READ_KEY}&depth=1&props=title%2Cmetadata%2Ctype&limit=10&skip=0&sort=-order`, {
    next: { revalidate: 120 }
  })
  return response.json();
}