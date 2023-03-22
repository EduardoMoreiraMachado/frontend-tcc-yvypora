import "./style.css"

export const AddressCard = ({imgUrl,iconUrl, title, nameCostumer,emailCostumer, address, principalAddress}) => {
    if(principalAddress !== false){
        return(
            <div className="address-card-main">
                <div className="main-address-container">
                    <p>Endereço principal</p>
                </div> 
               <div className="infos-card-address">
                <img src={imgUrl} alt=""  className="img-card-address"/>
                <div className="text-container-card-address">
                    <div className="title-card-address">
                        <p>{title}</p>
                    </div>
                    <div className="name-email-card-address">
                        <p>{nameCostumer}</p>
                        <p>{emailCostumer}</p>
                    </div>
                    <div className="address-card-address">
                        <p>{address}</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    return(
            <div className="address-card-main">
            <div className="infos-card-address">
                <img src={imgUrl} alt=""  className="img-card-address"/>
                <div className="text-container-card-address">
                    <div className="title-card-address">
                        <p>{title}</p>
                    </div>
                    <div className="name-email-card-address">
                        <p>{nameCostumer}</p>
                        <p>{emailCostumer}</p>
                    </div>
                    <div className="address-card-address">
                        <p>{address}</p>
                    </div>
                </div>
                </div>
        </div>
        )

}

export default AddressCard