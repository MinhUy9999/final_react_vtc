import React, { useState, useEffect } from "react";
import { DatePicker, Switch, Rate, notification, Tag, Table, Button } from "antd";
import moment from "moment";

const ThemPhim = () => {
  const [values, setValues] = useState({
    tenPhim: "",
    trailer: "",
    ngayKhoiChieu: "",
    dangChieu: false,
    sapChieu: false,
    hot: false,
    danhGia: 0,
    moTa: "",
    hinhAnh: null,
  });

  const [image, setImage] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Load movies from local storage when the component mounts
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  useEffect(() => {
    // Save movies to local storage whenever the movies state changes
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new movie to the list of movies
    const newMovie = {
      ...values,
      id: movies.length + 1, // Assign an ID based on the length of the list
      hinhAnh: image, // Use the current image state for display
    };

    setMovies([...movies, newMovie]);

    // Display success notification
    notification.success({
      message: "Success",
      description: "The movie has been added successfully!",
    });

    // Clear form values after submission
    setValues({
      tenPhim: "",
      trailer: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      moTa: "",
      hinhAnh: null,
    });
    setImage(null);
  };

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);

    notification.success({
      message: "Deleted",
      description: "The movie has been deleted successfully!",
    });
  };

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (hinhAnh) => hinhAnh && <img src={hinhAnh} alt="Movie" className="w-24 h-24" />,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Trailer",
      dataIndex: "trailer",
      key: "trailer",
    },
    {
      title: "Ngày khởi chiếu",
      dataIndex: "ngayKhoiChieu",
      key: "ngayKhoiChieu",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (_, record) => (
        <div className="flex space-x-2">
          {record.dangChieu && <Tag color="blue">Đang chiếu</Tag>}
          {record.sapChieu && <Tag color="green">Sắp chiếu</Tag>}
          {record.hot && <Tag color="volcano">Hot</Tag>}
        </div>
      ),
    },
    {
      title: "Đánh giá",
      dataIndex: "danhGia",
      key: "danhGia",
      render: (text) => `${text}/10`,
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Button type="primary" danger onClick={() => handleDelete(record.id)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-red-500">Thêm phim</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-5 mt-5">
          <InputText
            value={values.tenPhim}
            name="tenPhim"
            handleChange={handleChange}
            placeholder="Nhập tên phim"
            label="Tên phim"
            
          />
          <InputText
            value={values.trailer}
            name="trailer"
            handleChange={handleChange}
            placeholder="Nhập trailer"
            label="Trailer"
          />
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between col-span-2">
            {/* Ngày khởi chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2 text-black">
                Ngày khởi chiếu:
              </label>
              <DatePicker
                className="w-full h-3/4"
                format="DD-MM-YYYY"
                onChange={(date, dateString) => {
                  setValues({ ...values, ngayKhoiChieu: dateString });
                }}
                disabledDate={(current) => {
                  // Không cho phép chọn ngày trong quá khứ
                  return current && current < moment().startOf("day");
                }}
              />
            </div>
            {/* Đang chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2 text-black">
                Đang chiếu:
              </label>
              <Switch
                onChange={(checked) => {
                  setValues({ ...values, dangChieu: checked });
                }}
                checked={values.dangChieu}
              />
            </div>
            {/* Sắp chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2 text-black">
                Sắp chiếu:
              </label>
              <Switch
                onChange={(checked) => {
                  setValues({ ...values, sapChieu: checked });
                }}
                checked={values.sapChieu}
              />
            </div>
            {/* Hot  */}
            <div>
              <label htmlFor="" className="block mb-2 text-black">
                Hot:
              </label>
              <Switch
                onChange={(checked) => {
                  setValues({ ...values, hot: checked });
                }}
                checked={values.hot}
              />
            </div>
            {/* Đánh giá  */}
            <div>
              <label htmlFor="" className="block mb-2 text-black">
                Đánh giá: (trên thang điểm 10, mỗi ngôi sao 2 điểm)
              </label>
              <Rate
                onChange={(value) => {
                  setValues({ ...values, danhGia: value * 2 });
                }}
                allowHalf
              />
            </div>
          </div>
          <div className="col-span-2">
            <label htmlFor="" className="block mb-1 text-red-500">
              Mô tả:
            </label>
            <textarea
              onChange={handleChange}
              name="moTa"
              id=""
              cols="30"
              rows="10"
              className="border border-gray-300 w-full"
              value={values.moTa}
            ></textarea>
          </div>
          <div className="col-span-2">
            <label htmlFor="" className="text-black">
              Hình ảnh film:
            </label>
            <div className="relative w-48">
              {image && <img className="w-40" src={image} alt="Movie" />}
              {image && (
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={() => {
                    setImage(null);
                    setValues({ ...values, hinhAnh: null });
                  }}
                >
                  ×
                </button>
              )}
            </div>
            <input
              type="file"
              name="hinhAnh"
              onChange={(event) => {
                const img = event.target.files[0];
                if (img) {
                  const urlImg = URL.createObjectURL(img);
                  setImage(urlImg);
                  setValues({ ...values, hinhAnh: urlImg });
                }
              }}
              accept="image/*"
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-2 px-5 rounded bg-blue-500 text-black font-semibold"
            >
              Thêm phim
            </button>
          </div>
        </div>
      </form>

      {/* Render the list of added movies in an Ant Design Table */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Danh sách phim đã thêm</h2>
        <Table
          columns={columns}
          dataSource={movies}
          rowKey="id"
          pagination={false} // Remove pagination if you want to show all movies at once
        />
      </div>
    </div>
  );
};

const InputText = ({ value, name, handleChange, placeholder, label, type }) => (
  <div>
    <label htmlFor={name} className="block mb-2 text-black">
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="border border-gray-300 w-full p-2 text-black"
    />
  </div>
);

export default ThemPhim;
