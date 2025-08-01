import ItemList from "./ItemList";

const RestaurantCategory = ({title,itemCards,showItems,setshowItems}) => {

    function handleClick(){
        setshowItems();
    }

    return (
        <>
            <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto my-5">
                <div onClick={handleClick} className="flex justify-between cursor-pointer border-b-2 border-b-neutral-300">
                    <h1 className="text-lg font-semibold">{title}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
                <div>
                    {
                        itemCards.map((itemlist,index) => {
                        if(itemlist.itemCards){
                            return itemlist.itemCards.map((dish,i)=> 
                            (showItems &&
                            (<ItemList key={`${index}-${i}`}  itemData={dish?.card?.info} />)))
                        }
                        return (
                            showItems && (<ItemList key={index}  itemData={itemlist?.card?.info} />)
                        );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default RestaurantCategory;