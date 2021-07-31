const initialState = {
  productList: [
    {
      id: "SP01",
      name: "iPhone 12 Pro Max 512GB",
      img: "https://cdn.tgdd.vn/Products/Images/42/228739/TimerThumb/iphone-12-pro-512gb-(8).jpg",
      price: 39990000,
      screen: "OLED, 6.7'', Super Retina XDR",
      os: "iOS 14",
      frontCamera: "12 MP",
      backCamera: "3 camera 12 MP",
      chip: "Apple A14 Bionic",
      ram: "6 GB",
      rom: "12 GB",
      pin: "3687 mAh, 20 W",
    },
    {
      id: "SP02",
      name: "Samsung Galaxy Z Fold2 5G",
      img: "https://cdn.tgdd.vn/Products/Images/42/226099/TimerThumb/samsung-galaxy-z-fold2-5g-f.jpg",
      price: 50000000,
      screen:
        "Chính: Dynamic AMOLED, Phụ: Super AMOLED, Chính 7.59'' & Phụ 6.23'', Full HD+",
      os: "Android 10",
      frontCamera: "Trong 10 MP & Ngoài 10 MP",
      backCamera: "3 camera 12 MP",
      chip: "Snapdragon 865+",
      ram: "12 GB",
      rom: "256 GB",
      pin: "4500 mAh, 25 W",
    },
    {
      id: "SP03",
      name: "OPPO Find X3 Pro 5G",
      img: "https://cdn.tgdd.vn/Products/Images/42/232190/oppo-find-x3-pro-black-001-1-600x600.jpg",
      price: 26990000,
      screen: "AMOLED, 6.7'', Quad HD+ (2K+)",
      os: "Android 11",
      frontCamera: "32 MP",
      backCamera: "Chính 50 MP & Phụ 50 MP, 13 MP, 3 MP",
      chip: "Snapdragon 888",
      ram: "12 GB",
      rom: "256 GB",
      pin: "4500 mAh, 65 W",
    },
    {
      id: "SP04",
      name: "Xiaomi Mi 11 5G",
      img: "https://cdn.tgdd.vn/Products/Images/42/226264/TimerThumb/xiaomi-mi-11-(6).jpg",
      price: 18990000,
      screen: "AMOLED, 6.81'', Quad HD+ (2K+)",
      os: "Android 11",
      frontCamera: "20 MP",
      backCamera: "Chính 108 MP & Phụ 13 MP, 5 MP",
      chip: "Snapdragon 888",
      ram: "8 GB",
      rom: "256 GB",
      pin: "4600 mAh, 55 W",
    },
  ],
  selectedProduct: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
