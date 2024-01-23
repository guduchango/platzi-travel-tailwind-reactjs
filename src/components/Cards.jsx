import cardTexts from '../Info'

const isColorBg = (n) => {
    return (n % 2 == 0);
}

function Card() {
    return (
        <>
            {cardTexts?.map((card, i) => {

                if(isColorBg(i)){
                    return (
                        <div className="Card" key={i} >
                            <div className={`w-full h-3/5 rounded-t-lg ${card.bg_image} bg-cover`}></div>
                            <div className={`w-full h-2/5 bg-white dark:bg-gray-700 py-2 px-4`}>
                                <p className="text-terciary font-bold text-lg">{card.title}</p>
                                <p className="text-terciary text-base">{card.detail}</p>
                            </div>
                        </div>
                    )
                }else{
                    return (
                        <div className="Card" key={i} >
                            <div className={`w-full h-3/5 rounded-t-lg ${card.bg_image} bg-cover`}></div>
                            <div className={`w-full h-2/5 bg-secondary dark:bg-gray-800 py-2 px-4`}>
                                <p className="text-white font-bold text-lg">{card.title}</p>
                                <p className="text-white text-base">{card.detail}</p>
                            </div>
                        </div>
                    )
                }

            })}
        </>
    )

}

export default Card
