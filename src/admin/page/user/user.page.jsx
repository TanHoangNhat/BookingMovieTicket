import React, { useEffect, useState } from "react";
import { Divider } from "@material-ui/core";
import { userFieldList } from "../../helper/userFieldList";
import { useDispatch, useSelector } from "react-redux";
import UserModal from "../../components/user-modal/userModal.component";
import CommonPagination from "../../components/pagination/pagination.component";
import DataTable from "../../components/data-table/dataTable.component";
import TableTopToolbar from "../../components/table-top-toolbar/tableTopToolbar.component";
import swal from "sweetalert";
import {
  getUserListPagination,
  searchUserPagination
} from "../../../RTK_STORE/action/user.action";
import { setUserDetail } from "../../../RTK_STORE/slice/user.slice";
import { userService } from "../../../core/service/user.service";

const User = () => {
  const dispatch = useDispatch();

  const userListPagination = useSelector(
    (state) => state.user.userListPagination
  );

  const totalPages = useSelector((state) => state.user.totalPages);

  const [itemPerPageNumber, setItemPerPageNumber] = useState(5);

  const [openModal, setOpenModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [isSearching, setIsSearching] = useState(false);

  const [isUpdating, setIsUpdating] = useState(false);

  const [searchString, setSearchString] = useState("");

  const handleOpenModal = () => {
    dispatch(setUserDetail({}));
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsUpdating(false);
  };

  const hanldeChangePage = (event, value) => {
    setCurrentPage(value);
    isSearching
      ? dispatch(
          searchUserPagination({
            searchString,
            pageNumber: value,
            itemPerPageNumber
          })
        )
      : dispatch(
          getUserListPagination({ pageNumber: value, itemPerPageNumber })
        );
  };

  const handleChangeItem = (event) => {
    setItemPerPageNumber(event.target.value);
  };

  const handleAddUser = async (user) => {
    const response = await (async () => {
      try {
        return await userService.addUser(user);
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
    })();

    if (response.status === 200) {
      swal({
        title: "Success!",
        text: "Thêm người dùng thành công",
        icon: "success",
        button: false,
        timer: 2000
      });
      setOpenModal(false);
      setCurrentPage(1);
      dispatch(getUserListPagination({ pageNumber: 1, itemPerPageNumber }));
      return true;
    } else {
      swal({
        title: "Unsuccess!",
        text: response.data,
        icon: "error",
        buttons: "OK",
        dangerMode: true
      });
      return false;
    }
  };

  const handleDeleteUser = (taiKhoan) => {
    swal({
      title: "Are you sure?",
      text: "Bạn có chắc chắn muốn xóa người dùng này?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async (willDelete) => {
      if (willDelete) {
        const response = await (async () => {
          try {
            return await userService.deleteUser(taiKhoan);
          } catch (error) {
            console.log(error.response);
            return error.response;
          }
        })();

        if (response.status === 200) {
          swal({
            title: "Success!",
            text: response.data,
            icon: "success",
            button: false,
            timer: 2000
          });
          dispatch(
            getUserListPagination({
              pageNumber: currentPage,
              itemPerPageNumber
            })
          );
        } else {
          swal({
            title: "Unsuccess!",
            text: response.data,
            icon: "error",
            buttons: "OK",
            dangerMode: true
          });
        }
      }
    });
  };

  const handleSearchUser = (event) => {
    if (event.target.value === "") {
      setIsSearching(false);
      setCurrentPage(1);
      dispatch(getUserListPagination({ pageNumber: 1, itemPerPageNumber }));
      return;
    }

    setSearchString(event.target.value);
    setIsSearching(true);
    dispatch(
      searchUserPagination({
        searchString: event.target.value,
        pageNumber: 1,
        itemPerPageNumber
      })
    );
  };

  const handleEditUser = (user) => {
    dispatch(setUserDetail(user));
    setIsUpdating(true);
    setOpenModal(true);
  };

  const handleUpdateUser = async (user) => {
    const response = await (async () => {
      try {
        return await userService.updateUser(user);
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
    })();

    if (response.status === 200) {
      swal({
        title: "Success!",
        text: "Cập nhật thành công!",
        icon: "success",
        button: false,
        timer: 2000
      });
      setOpenModal(false);
      setIsUpdating(false);
      dispatch(
        getUserListPagination({ pageNumber: currentPage, itemPerPageNumber })
      );
    } else {
      swal({
        title: "Unsuccess!",
        text: response.data,
        icon: "error",
        buttons: "OK",
        dangerMode: true
      });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    dispatch(getUserListPagination(1, itemPerPageNumber));
  }, [itemPerPageNumber]);

  return (
    <div>
      {/* Top toolbar */}
      <TableTopToolbar
        handleOpenModal={handleOpenModal}
        handleSearch={handleSearchUser}
      />

      <Divider />

      {/* Table */}
      <DataTable
        dataFieldList={userFieldList}
        dataListPagination={userListPagination}
        handleDelete={handleDeleteUser}
        deleteObjectKey="taiKhoan"
        handleEdit={handleEditUser}
      />

      {/* Pagination */}
      <CommonPagination
        hanldeChangePage={hanldeChangePage}
        handleChangeItem={handleChangeItem}
        totalPages={totalPages}
        currentPage={currentPage}
      />

      {/* Modal */}
      <UserModal
        openModal={openModal}
        handleClose={handleCloseModal}
        handleAction={isUpdating ? handleUpdateUser : handleAddUser}
        isUpdating={isUpdating}
      />
    </div>
  );
};

export default User;
