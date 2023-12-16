import React, { Fragment } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <Fragment>
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>

          <section className="">
            <form action="">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol size="auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md="5" start>
                  <MDBInput
                    contrast
                    type="email"
                    label="Email address"
                    className="mb-4"
                  />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color="light" type="submit" className="mb-4">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0 text-start">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Khóa học
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Tải ứng dụng
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Hãy liên hệ với chúng tôi
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0 text-start">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Nghề nghiệp
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Trợ giúp và hỗ trợ
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Đơn vị liên kết
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0 text-start">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Điều khoản
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Chính sách và quyền riêng tư
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Cài đặt cookie
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Sơ đồ trang web
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <MDBBtn outline color="white">
                  <MDBIcon size="2x" fas icon="globe" />
                  <p>Tiếng Việt</p>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
      </MDBFooter>
    </Fragment>
  );
};

export default Footer;
