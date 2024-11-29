import ShopCartItemRepository from "../repositories/ShopCartItemRepository";
import Dependencies from "./Dependencies";
import { InsertShopCartItem, GetShopCartItems, GetShopCartItemById, DeleteShopCartItemById, IncreaseQuantityShopCartItemById, DecreaseQuantityShopCartItemById, SaveProduct, GetAllProducts } from "@/application/UseCases";
import ProductRepository from "../repositories/ProductRepository";

const dependencies = new Dependencies()

const shopCartItemRepository = new ShopCartItemRepository
const productRepository = new ProductRepository

shopCartItemRepository.subscribe(data => {
    console.log('ON: ShopCartItemRepository: ', data)
})

const insertShopCartItem = new InsertShopCartItem(shopCartItemRepository, productRepository)
const getShopCartItems = new GetShopCartItems(shopCartItemRepository)
const getShopCartItemById = new GetShopCartItemById(shopCartItemRepository)
const deleteShopCartItemById = new DeleteShopCartItemById(shopCartItemRepository)
const increaseQuantityShopCartItemById = new IncreaseQuantityShopCartItemById(shopCartItemRepository)
const decreaseQuantityShopCartItemById = new DecreaseQuantityShopCartItemById(shopCartItemRepository)
const saveProduct = new SaveProduct(productRepository)
const getAllProducts = new GetAllProducts(productRepository)

dependencies.cadasterDependency('insertShopCartItem', insertShopCartItem)
dependencies.cadasterDependency('getShopCartItems', getShopCartItems)
dependencies.cadasterDependency('getShopCartItemById', getShopCartItemById)
dependencies.cadasterDependency('deleteShopCartItemById', deleteShopCartItemById)
dependencies.cadasterDependency('increaseQuantityShopCartItemById', increaseQuantityShopCartItemById)
dependencies.cadasterDependency('decreaseQuantityShopCartItemById', decreaseQuantityShopCartItemById);
dependencies.cadasterDependency(saveProduct.constructor.name, saveProduct);
dependencies.cadasterDependency(getAllProducts.constructor.name, getAllProducts);



export default dependencies