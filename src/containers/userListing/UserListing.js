import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid_v4 } from "uuid";

const UserListing = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = () => {dispatch({type: "FETCH_DATA"});}
        fetchData();
    }, [dispatch]);

    const data = useSelector((state)=> {
        return state.userListingPayload;
    });

    const userlist = Object.keys(data).map((key) => (<tr key={uuid_v4()}><td>{data[key].email}</td></tr>));
   
    return(
        <div>
            <table align="center" border="1" cellSpacing="0">
                <tr><th>USERS LIST</th></tr>
                {userlist}
            </table>
        </div>
    );
   
};



export default UserListing;
