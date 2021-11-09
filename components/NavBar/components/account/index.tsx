import { Chip, Popover, Typography } from "@mui/material";
import { NextPage } from "next"
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { KEY_TYPES, removeItem } from "../../../../utils/localStoreTools";
import Theme from "../theme";

const Account: NextPage = () => {
  const user = useSelector((state: any) => state.user)
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <section className="nav-bar__account background">
        <div className="nav-bar__account-full_name">
          <span className="over-text">{user.full_name || user.email}</span>
          <Chip 
            style={{ textDecoration: 'underline', color: 'rgba(256, 256, 256, .65)', marginTop: '4px' }} 
            label="Log out" onClick={() => {
              removeItem(KEY_TYPES.AUTHEN)
              router.push('/login')
            }}
            className="el-hover border-hover"
          />
        </div>
        <div className="nav-bar__account-avatar el-hover">
          <img className="border-hover" aria-describedby={id} onClick={handleClick} src="/static/images/naruto1.jpeg" alt="avatar" />
        </div>
      </section>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
      <Theme handleClose={handleClose} />
      </Popover>
      <style jsx>{`
        .nav-bar__account {
          display: flex;
          flex-wrap: wrap;
          justify-content: end;
          border-radius: 5px;
          padding: 8px 16px;
          box-sizing: border-box;
          &-full_name {
            line-height: 40px;
            display: flex;
            span {
              font-size: 16px;
              font-family: "Comic Sans MS", "Comic Sans", cursive;
              color: white;
              max-width: 200px; 
              letter-spacing: 2px;
            }
            padding-right: 8px;
          }
          &-avatar {
            width: 40px;
            height: 40px;
            border-radius: 99999px;

            img {
              width: 100%;
              height: 100%;
              border-radius: 99999px;
            }
          }
          &-theme {
            width: 100%;
          }
        }
      `}
      </style>
    </>
  )
}

export default Account
