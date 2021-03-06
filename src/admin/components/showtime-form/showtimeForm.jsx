import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControl,
  Grid,
  makeStyles,
  FormHelperText
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import DayJsUtils from "@date-io/dayjs";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { showtimeValidationSchema } from "../../helper/showtimeValidationSchema";
import {
  getCinemaGroupList,
  getCinemaSystemList
} from "../../../RTK_STORE/action/cinema.action";
import { getCinemaList } from "../../../RTK_STORE/slice/cinema.slice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    padding: theme.spacing(0, 1)
  }
}));

const ShowtimeForm = ({ maPhim, handleSubmit }) => {
  const dispatch = useDispatch();
  const { cinemaSystemList, cinemaGroupList, cinemaList } = useSelector(
    (state) => state.cinema
  );

  const classes = useStyles();
  const [datetime, setDatetime] = useState(new Date());
  const [cinemaSystemCode, setCinemaSystemCode] = useState("");
  const [cinemaGroupCode, setCinemaGroupCode] = useState("");
  const [cinemaLength, setCinemaLength] = useState("");

  const formik = useFormik({
    initialValues: {
      maPhim,
      ngayChieuGioChieu: datetime,
      maRap: "",
      giaVe: ""
    },
    onSubmit: async (values, { resetForm }) => {
      if (await handleSubmit(values)) {
        handleResetForm();
      }
    },
    validationSchema: showtimeValidationSchema,
    enableReinitialize: true
  });

  const renderCinemaSystemList = () => {
    return cinemaSystemList?.map((s, i) => (
      <MenuItem key={i} value={s.maHeThongRap}>
        {s.tenHeThongRap}
      </MenuItem>
    ));
  };

  const renderCinemaGroupList = () => {
    return cinemaGroupList?.map((g, i) => (
      <MenuItem key={i} value={g.maCumRap}>
        {g.tenCumRap}
      </MenuItem>
    ));
  };

  const renderCinemaList = () => {
    return cinemaList?.map((c, i) => (
      <MenuItem key={i} value={c.maRap}>
        {c.tenRap}
      </MenuItem>
    ));
  };

  // *** Hanlde event
  const handleChangeCinemaSystemList = (e) => {
    setCinemaSystemCode(e.target.value);
    formik.setFieldValue("maRap", "");
    formik.touched.maRap = false;
    setCinemaGroupCode("");
  };

  const handleChangeCinemaGroupList = (e) => {
    setCinemaGroupCode(e.target.value);
  };

  const handleChooseDateTime = (dateTimeValue) => {
    formik.setFieldValue("ngayChieuGioChieu", dateTimeValue);
  };

  const handleResetForm = () => {
    formik.handleReset();
    setCinemaSystemCode("");
    setCinemaGroupCode("");
    setCinemaLength("");
    setDatetime(new Date());
  };

  useEffect(() => {
    dispatch(getCinemaSystemList());
  }, []);

  useEffect(() => {
    if (cinemaSystemCode) dispatch(getCinemaGroupList(cinemaSystemCode));
  }, [cinemaSystemCode]);

  useEffect(() => {
    dispatch(getCinemaList(cinemaGroupCode));
  }, [cinemaGroupCode]);

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        onReset={handleResetForm}
        style={{ margin: "16px auto", width: "75%" }}
      >
        <Grid container spacing={2}>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel style={{ left: "8px" }} id="cinema-system-list">
                  Ch???n h??? th???ng r???p
                </InputLabel>
                <Select
                  labelId="cinema-system-list"
                  name="cinemaSystemList"
                  value={cinemaSystemCode}
                  onChange={handleChangeCinemaSystemList}
                >
                  {renderCinemaSystemList()}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel style={{ left: "8px" }} id="cinema-group">
                  Ch???n c???m r???p
                </InputLabel>
                <Select
                  labelId="cinema-group"
                  name="cinemaGroup"
                  value={cinemaGroupCode}
                  onChange={handleChangeCinemaGroupList}
                >
                  {renderCinemaGroupList()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl
                fullWidth
                className={classes.formControl}
                error={formik.touched.maRap && formik.errors.maRap}
              >
                <InputLabel style={{ left: "8px" }} id="cinema">
                  Ch???n r???p
                </InputLabel>
                <Select
                  labelId="cinema"
                  name="maRap"
                  value={formik.values.maRap}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                >
                  {renderCinemaList()}
                </Select>
                <FormHelperText>
                  {formik.touched.maRap ? formik.errors.maRap : ""}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={2} container alignItems="flex-end">
              <FormControl className={classes.formControl}>
                <Button type="submit" variant="contained" color="primary">
                  Th??m L???ch
                </Button>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <MuiPickersUtilsProvider utils={DayJsUtils}>
                <FormControl fullWidth className={classes.formControl}>
                  <KeyboardDateTimePicker
                    variant="inline"
                    ampm={false}
                    label="Ng??y chi???u - Gi??? chi???u"
                    format="DD/MM/YYYY HH:mm:ss"
                    name="ngayChieuGioChieu"
                    value={formik.values.ngayChieuGioChieu}
                    onChange={handleChooseDateTime}
                  />
                </FormControl>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth className={classes.formControl}>
                <TextField
                  value={cinemaLength}
                  onChange={(e) => setCinemaLength(e.target.value)}
                  label="Ch???n th???i l?????ng phim"
                  name="thoiLuong"
                />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth className={classes.formControl}>
                <TextField
                  label="Gi?? v??"
                  name="giaVe"
                  value={formik.values.giaVe}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.giaVe && formik.errors.giaVe}
                  helperText={formik.touched.giaVe ? formik.errors.giaVe : ""}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2} container alignItems="flex-end">
              <FormControl fullWidth className={classes.formControl}>
                <Button type="reset" variant="contained">
                  H???y
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ShowtimeForm;
