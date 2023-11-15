import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { fetchLists } from "../store";
import CreateListForm from "../components/CreateListForm";
import { useThunk } from "../hooks/use-thunk";
import { FaListUl } from "react-icons/fa6";
import { useEffect } from "react";

const Root = () => {
    const [doFetchLists, isLoadingLists, loadingListsError] = useThunk(fetchLists);
    const navigate = useNavigate();

    const { data } = useSelector(state => {
        return state.lists;
    });

    useEffect(() => {
        doFetchLists();
    }, [doFetchLists]);

    let content;

    if(isLoadingLists) {
        content = <div>Loading...</div>;
    }
    else if(loadingListsError) {
        content =  <div>Error fetching data...</div>;
    }
    else {

        if(!data.length) {
            content = <div>No Lists created yet...</div>;
        }
        else {
            content = data.map(list => {
                return (
                    <li key={list.id} className="nav-item rounded">
                        <NavLink to={`/lists/${list.id}`} className={"nav-link"} onClick={e => {
                            e.preventDefault();
                            navigate(`/lists/${list.id}`, { state: { list: list } });
                        }} style={({ isActive }) => {
                                return {
                                    color: isActive ? "white" : "black",
                                    backgroundColor: isActive ? "#6C757D" : ""
                                }
                        }} >
                            {list.name}
                        </NavLink>
                    </li>
                );
            }); 
        }
    }

    return (
        <div className="container-fluid">
            <div className="row g-0">
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary h-100 position-fixed col-4 col-lg-3 overflow-auto" >

                    <CreateListForm />

                    <hr />

                    <ul className="nav nav-pills flex-column mb-auto">
                        {content}
                    </ul>

                    <hr />

                    <div className="d-flex align-items-center justify-content-center fs-4">
                        <FaListUl className="me-2" />
                        <span>better lists</span>
                    </div>
                </div>
                <div className="container position-fixed w-100 col-8 col-lg-9 vh-100 overflow-auto" style={{ marginLeft: "35%", paddingRight: "45%" }} >
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Root;