


const MenuCard = (props: any) => {
    return (<>
    <div className="MenuCard" >
       <h3>{props.title}</h3>
       <div>
        {props.children}
       </div>
    </div>
    </>);
}

export default MenuCard;