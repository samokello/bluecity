import React from "react";
import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Link from "next/link";

const AdminHolder = styled.div`
  overflow: auto;
  height:auto
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Products = () => {
  return (
    <>
      <div style={{ background: "#e3e3e3" }}>
        <Holder
          style={{
            justifyContent: "center",
            background: "blue",
            width: "100%",
            position: "relative",
            zIndex:"10"

          
          }}
        >
          <HomeIcon style={{ fontSize: "4rem" }} />
          <h1 style={{ fontSize: "4rem", textAlign: "center" }}>
            Blue City Company
          </h1>
        </Holder>

        <div style={{ display: "flex", width: "100%", marginTop: '-.1%',position:"relative" ,overflow:"hidden", height:'100vh'}}>
          <AdminHolder>
            <div
              style={{
                marginLeft: "2em",

                padding: "2em",
                width: "60%",
              }}
            >
              <Holder>
                <PostAddIcon style={{ fontSize: "2rem" }} />
                <p style={{ fontSize: "2rem", cursor: "pointer" }}>Orders</p>
              </Holder>

              <Link href={"/ProductsPage"}>
                <Holder>
                  <ShoppingCartIcon style={{ fontSize: "2rem" }} />
                  <p style={{ fontSize: "2rem", cursor: "pointer" }}>
                    Products
                  </p>
                </Holder>
              </Link>

              <Holder>
                <PeopleIcon style={{ fontSize: "2rem" }} />
                <p style={{ fontSize: "2rem", cursor: "pointer" }}>
                  Curstomers{" "}
                </p>
              </Holder>

              <Holder>
                <AssessmentIcon style={{ fontSize: "2rem" }} />
                <p style={{ fontSize: "2rem", cursor: "pointer" }}>Reports</p>
              </Holder>

              <h2>SAVED REPORTS</h2>

              <Holder>
                <InsertDriveFileIcon style={{ fontSize: "2rem" }} />
                <p style={{ fontSize: "2rem", cursor: "pointer" }}>
                  Current Month
                </p>
              </Holder>

              <Holder>
                <InsertDriveFileIcon style={{ fontSize: "2rem" }} />
                <p style={{ fontSize: "2rem", cursor: "pointer" }}>
                  Last Quater
                </p>
              </Holder>

              <Holder>
                <InsertDriveFileIcon style={{ fontSize: "2rem" }} />
                <p style={{ fontSize: "2rem", cursor: "pointer" }}>
                  Social Engagment
                </p>
              </Holder>

              <Holder>
                <InsertDriveFileIcon style={{ fontSize: "2rem" }} />
                <p style={{ fontSize: "2rem", cursor: "pointer" }}>
                  End year Sales
                </p>
              </Holder>
            </div>
          </AdminHolder>

          <div style={{ background: "red", width: "100%",overflow:"auto",height:"auto", fontSize:'5rem' }}>
            {/* <AdminHolder> */}
            <p>
              Hello world Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            {/* </AdminHolder> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
