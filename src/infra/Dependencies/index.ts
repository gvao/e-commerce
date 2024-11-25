import InsertShopCartItem from "@/application/UseCases/InsertShopCartItem";
import GetShopCartItems from "@/application/UseCases/GetShopCartItems";
import ShopCartItemRepository from "../repositories/ShopCartItemRepository";
import Dependencies from "./Dependencies";
import GetShopCartItemById from "@/application/UseCases/GetShopCartItemById";
import DeleteShopCartItemById from "@/application/UseCases/DeleteShopCartItemById";
import Fetcher from "@/utils/Fetcher";
import ShopCartGateway from "../gateway/ShopCartGateway";
import IncreaseQuantityShopCartItemById from "@/application/UseCases/IncreaseQuantityShopCartItemById";
import DecreaseQuantityShopCartItemById from "@/application/UseCases/DecreaseQuantityShopCartItemById";

const dependencies = new Dependencies()

const shopCartItemRepository = new ShopCartItemRepository
const fetcher = new Fetcher(process.env.URL_BASE)
const shopCartGateway = new ShopCartGateway(fetcher)

const insertShopCartItem = new InsertShopCartItem(shopCartItemRepository)
const getShopCartItems = new GetShopCartItems(shopCartItemRepository)
const getShopCartItemById = new GetShopCartItemById(shopCartItemRepository)
const deleteShopCartItemById = new DeleteShopCartItemById(shopCartItemRepository)
const increaseQuantityShopCartItemById = new IncreaseQuantityShopCartItemById(shopCartItemRepository)
const decreaseQuantityShopCartItemById = new DecreaseQuantityShopCartItemById(shopCartItemRepository)

dependencies.cadasterDependency('insertShopCartItem', insertShopCartItem)
dependencies.cadasterDependency('getShopCartItems', getShopCartItems)
dependencies.cadasterDependency('getShopCartItemById', getShopCartItemById)
dependencies.cadasterDependency('deleteShopCartItemById', deleteShopCartItemById)
dependencies.cadasterDependency('shopCartGateway', shopCartGateway)
dependencies.cadasterDependency('increaseQuantityShopCartItemById', increaseQuantityShopCartItemById)
dependencies.cadasterDependency('decreaseQuantityShopCartItemById', decreaseQuantityShopCartItemById)

export default dependencies