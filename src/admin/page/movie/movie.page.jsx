import { Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import DataTable from "../../components/data-table/dataTable.component";
import MovieModal from "../../components/movie-modal/movieModal.component";
import CommonPagination from "../../components/pagination/pagination.component";
import TableTopToolbar from "../../components/table-top-toolbar/tableTopToolbar.component";
import { movieFieldList } from "../../helper/movieFieldList";
import { getMovieListPagination } from "../../../RTK_STORE/action/movie.action";
import { setMovieDetail } from "../../../RTK_STORE/slice/movie.slice";
import { movieService } from "../../../core/service/movie.service";

const Movie = () => {
  const dispatch = useDispatch();

  const movieListPagination = useSelector(
    (state) => state.movie.movieListPagination
  );

  const totalPages = useSelector((state) => state.movie.totalPages);

  const [itemPerPageNumber, setItemPerPageNumber] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  const [openModal, setOpenModal] = useState(false);

  const [isUpdating, setIsUpdating] = useState(false);

  const handleChangeItem = (event) => {
    setItemPerPageNumber(event.target.value);
  };

  const hanldeChangePage = (event, value) => {
    setCurrentPage(value);
    dispatch(getMovieListPagination({ pageNumber: value, itemPerPageNumber }));
  };

  const handleOpenModal = () => {
    dispatch(setMovieDetail({}));
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsUpdating(false);
  };

  const handleAddMovie = async (movie) => {
    const response = await movieService.addMovie(movie);

    console.log(response);
    if (response.status === 200) {
      swal({
        title: "Success!",
        text: "Thêm phim thành công",
        icon: "success",
        button: false,
        timer: 2000
      });
      setOpenModal(false);
      setCurrentPage(1);
      dispatch(getMovieListPagination({ pageNumber: 1, itemPerPageNumber }));
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

  const handleDeleteMovie = (movieID) => {
    swal({
      title: "Are you sure?",
      text: "Bạn có chắc chắn muốn xóa phim này?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async (willDelete) => {
      if (willDelete) {
        const response = await (async () => {
          try {
            return await movieService.deleteMovie(movieID);
          } catch (error) {
            console.log(error);
            return error.response;
          }
        })();

        if (!response) return;

        if (response.status === 200) {
          swal({
            title: "Success!",
            text: response.data,
            icon: "success",
            button: false,
            timer: 2000
          });
          dispatch(
            getMovieListPagination({
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

  const handleEditMovie = (movie) => {
    dispatch(setMovieDetail(movie));
    setOpenModal(true);
    setIsUpdating(true);
  };

  const handleUpdateMovie = async (movie) => {
    const response = await movieService.updateMovie(movie);
    if (response.status === 200) {
      swal({
        title: "Success!",
        text: "Cập nhật phim thành công!",
        icon: "success",
        button: false,
        timer: 2000
      });
      setOpenModal(false);
      setIsUpdating(false);
      dispatch(setMovieDetail({}));
      dispatch(
        getMovieListPagination({ pageNumber: currentPage, itemPerPageNumber })
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
    dispatch(getMovieListPagination({ pageNumber: 1, itemPerPageNumber }));
  }, [itemPerPageNumber]);

  return (
    <div>
      <TableTopToolbar handleOpenModal={handleOpenModal} />
      <Divider />
      <DataTable
        dataFieldList={movieFieldList}
        dataListPagination={movieListPagination}
        handleDelete={handleDeleteMovie}
        deleteObjectKey="maPhim"
        handleEdit={handleEditMovie}
        isMovie={true}
      />
      <CommonPagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangeItem={handleChangeItem}
        hanldeChangePage={hanldeChangePage}
      />

      <MovieModal
        openModal={openModal}
        handleClose={handleCloseModal}
        handleAction={isUpdating ? handleUpdateMovie : handleAddMovie}
        isUpdating={isUpdating}
      />
    </div>
  );
};

export default Movie;
