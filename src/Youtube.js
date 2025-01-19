import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IoIosBulb } from "react-icons/io";
import { TbDeviceTvFilled } from "react-icons/tb";

export default function VideoIntroductions () {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('lg')); // Ensure tablet breakpoint usage

  const containerStyle = {
    width: "100%",
    minHeight: "531px",
    backgroundColor: "#1C4670",
    display: "flex",
    flexDirection: tablet ? "row" : "column",
  };

  const imgUrl =
    "https://s3-alpha-sig.figma.com/img/a62c/2d74/6f4256f5f8a9ed25e6891d1db44e4512?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WGTjDr~wBGcsMj8cthh9E2Uh8GbV8OfPO03mJOj9YZfeOOsXjbnrRokUBvXtDK6-s6zy72DvvpA0S3eqqoab4IKG930gfeMqM5PBZuy576igUz5LyC4xwMaXGHiU1eC~AfLG-peaF86a0ZOxmAXiE069H1XkUAtaeRuh-DiCQ0isqExQf1Z4MlSTTftfZgVerhQ3-TzqIX4p9yqHOPudaZmiIrTxtJ5vblFi2vpNYn3De-wHVppgijnYeRxOn9BfrsA1MSmPtLshyzxkV35pQpdOl~Bo6puEJoTg~4GhGnJRgn88pLNkO~SJA9kzKyb8lcMfHPkuUSV0-Hg92cn4xg";

  return (
    <div style={containerStyle}>
      <div style={{ width: tablet ? "50%" : "100%", textAlign: "left" }}>
        <div
          style={{
            maxWidth: "572px",
            marginTop: "72px",
            marginLeft: "70px",
            marginBottom: tablet ? "50px" : "0px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{
            fontSize: "34px",
            fontWeight: 700,
            lineHeight: "40px",
            color: "#FFFFFF",
          }}>
            Our Video Introductions
          </h1>
          <p style={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            color: "#AAB5CD",
          }}>
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
          </p>
          <div style={{ display: "flex", flexDirection: "row", gap: "16px" , alignItems: "center" }}>
            <div
              style={{
                width: "60px",
                height: "50px",
                borderRadius: "100%",
                backgroundColor: "#FFA229",
              }}
            > <IoIosBulb style={{color: "white" , height: "40px" , width: "40px",position:"relative", top:"5px",left:"3px"}}/> </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "0px",
              }}>
                Explore ideas together
              </h2>
              <p style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#AAB5CD",
              }}>
                Engage audience segments and finally create actionable insights. Amplify vertical integration.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "center"}}>
            <div
              style={{
                width: "60px",
                height: "50px",
                borderRadius: "100%",
                backgroundColor: "#FFA229",
              }}
            ><TbDeviceTvFilled style={{color: "white" , height: "40px" , width: "40px",position:"relative", top:"5px",left:"3px"}}/> </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#FFFFFF",
              }}>
                Bring those ideas to life
              </h2>
              <p style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#AAB5CD",
              }}>
                Engage audience segments and finally create actionable insights. Amplify vertical integration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: tablet ? "50%" : "100%" }}>
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            height: "420px",
            margin: "60px 40px",
          }}
        >
          <img
            src={imgUrl}
            alt="Main"
            style={{ width: "100%", height: "100%" }}
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/303c/2a2d/9a4d3ad1e29de4390d85015b86332762?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S9h5gdrm2JS0fyElMhELFK4qdFCpX3ph2HmC3gVC0oTd6Xra2~9FOENZugabPuBTtP91A7D7Pouk6uLRDpu6XItC7fp7TiwxHroG9EHw4yWbbWgA~FfxCzcSZalS5wjejv~7XMzCiRPmWig8QKGZQ0aKwAafNlBRtlJYwuU4-930EumsvA7zEPsP-aqMG8jXinp4heEYzYzVdK5WVzGxifU5hKQvvNUDlAEdpTieI7E16TVI~2NytJmlIH0tY~wWZUl6HG2tQg6CARfcdrUUppE7~HKaJEQw0cViLS1D3h2LTs7GRm3020x5oUuVRayoCWwg6D6dzkq0OIyUGRPSqA__"
            alt="Overlay"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "154px",
              maxHeight: "122px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

