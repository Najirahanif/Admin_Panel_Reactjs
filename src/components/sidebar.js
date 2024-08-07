function Sidebar() {
    return (
        <>
        <div className="fixed" id="sidebar-wrapper">
            <div className="sidebar-heading"><i class="fa fa-th-large" aria-hidden="true"></i></div>
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action list-group-item-light " href="#!"><i class="fa fa-home" aria-hidden="true"></i></a>
                <a className="list-group-item list-group-item-action list-group-item-light" href="#!"><i class="fa fa-bar-chart" aria-hidden="true"></i></a>
                <a className="list-group-item list-group-item-action list-group-item-light" href="#!"><i class="fa fa-clipboard"></i></a>
                <a className="list-group-item list-group-item-action list-group-item-light" href="#!"><i class="fa fa-id-badge" aria-hidden="true"></i></a>
                <a className="list-group-item list-group-item-action list-group-item-light" href="#!"><i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
            </div>
        </div>
        </>
    );
    
}
export default Sidebar;