import Fetcher from "../../utils/Fetcher";
import { describe, expect, it } from "vitest";

describe.skip("E2E", () => {
    const fetcher = new Fetcher()
    it("GET api/products", async () => {
        const { products } = await fetcher.request('/api/products');
        expect(products).toHaveLength(3)
    })  
    
    it('POST api/products', )
    
})