import React, { Component } from "react";
import "./ISvg.css";
import {
    SVGListView,
    SVGOrder,
    SVGTag,
    SVGStore,
    SVGBroadcast,
    SVGArchive,
    SVGMain,
    SVGBell,
    SVGMenu,
    SVGUser,
    SVGSearch,
    SVGArrowUp,
    SVGDowloand,
    SVGDelete,
    SVGExperiment,
    SVGApplication,
    SVGWrite,
    SVGChevronRight,
    SVGSwap,
    SVGPrint,
    SVGCheckList,
    SVGCross,
    SVGSave,
    SVGAdd,
    SVGButtonAdd,
    SVGLocation,
    SVGCheckMark,
    SVGArrowThinLeft,
    SVGShipper,
    SVGCloseModal,
    SVGCopy,
    SVGStats,
    SVGUpload,
    SVGSee,
    SVGAddFile,
    SVGList,
    SVGArrowRight,
    SVGBriefcase,
    SVGTimeReverse,
    SVGArrowThinRight,
    SVGButtonRight,
    SVGSaleMan,
    SVGViewList,
    SVGAddUpload,
    SVGArrowThinup,
    SVGArrowThindown,
    SVGChat,
    SVGPreview,
    SVGPost,
    SVGWifi,
    SVGArticle,
    SVGChart,
    SVGDashboard,
    SVGArrowRight1,
    SVGBlog,
    SVGMenuAgency,
    SVGMenuNew,
    SVGBanner,
    SVGCheckCircle,
    SVGWarehouse,
    SVGDebit,
    SVGHidePassword,
    SVGShowPassword,
    SVGUserPhanQuyen,
    SVGCheckFalse,
    SVGCheckTrue,
    SVGHide,
    SVGNotiApp,
    SVGClock,
    SVGBellNoti,
    SVGGift,
    SVGAngleRight
} from "../../assets/svg";
class ISvg extends Component {
    static NAME = {
        IconGift: "SVGGift",
        IconClock: "SVGClock",
        IconBellNoti: "SVGBellNoti",
        NOTI_APP: "SVGNotiApp",
        SHOW_PASSWORD: "SVGShowPassword",
        HIDE_PASSWORD: "SVGHidePassword",
        Hide: "SVGHide",
        UserPhanQuyen: "SVGUserPhanQuyen",
        CheckFalse: "SVGCheckFalse",
        CheckTrue: "SVGCheckTrue",
        WAREHOUSE: "SVGWarehouse",
        CHECK_CIRCLE: "SVGCheckCircle",
        LISTVIEW: "LISTVIEW",
        ORDER: "ORDER",
        TAG: "TAG",
        STORE: "STORE",
        BROADCAST: "BROADCAST",
        ARCHIVE: "ARCHIVE",
        MAIN: "MAIN",
        BELL: "BELL",
        MENU: "MENU",
        USER: "USER",
        SEARCH: "SEARCH",
        ARROWUP: "ARROWUP",
        DOWLOAND: "DOWLOAND",
        DELETE: "DELETE",
        EXPERIMENT: "EXPERIMENT",
        APPLICATION: "APPLICATION",
        WRITE: "WRITE",
        CHEVRONRIGHT: "CHEVRONRIGHT",
        SWAP: "SWAP",
        PRINT: "PRINT",
        CROSS: "CROSS",
        SAVE: "SAVE",
        ADD: "ADD",
        BUTTONADD: "BUTTONADD",
        LOCATION: "LOCATION",
        CHECKMARK: "CHECKMARK",
        ARROWTHINLEFT: "ARROWTHINLEFT",
        UPLOAD: "UPLOAD",
        STATS: "STATS",
        COPY: "COPY",
        SEE: "SEE",
        SHIPPER: "SHIPPER",
        CLOSEMODAL: "CLOSEMODAL",
        ADDFILE: "ADDFILE",
        LIST: "LIST",
        ARROWRIGHT: "ARROWRIGHT",
        BUTTONRIGHT: "BUTTONRIGHT",
        SALEMAN: "SALEMAN",
        VIEWLIST: "VIEWLIST",
        ADDUPLOAD: "ADDUPLOAD",
        ArrowThinup: "SVGArrowThinup",
        ArrowThindown: "SVGArrowThindown",
        Chat: "Chat",
        Preview: "PREVIEW",
        Post: "Post",
        Wifi: "Wifi",
        Article: "SVGArticle",
        Chart: "SVGChart",
        Dashboard: "SVGDashboard",
        SVGArrowRight1: "SVGArrowRight1",
        SVGBlog: "SVGBlog",
        SVGMenuAgency: "SVGMenuAgency",
        Banner: "SVGBanner",
        Debit: "SVGDebit",
        AngleRight: "AngleRight",
    };
    render() {
        const { name, width, height, fill = "none", opacity = 1 } = this.props;
        var fillHover = this.props.fillHover;
        if (!fillHover) {
            fillHover = fill;
        }

        var SVG = null;
        // eslint-disable-next-line default-case
        switch (name) {
            case ISvg.NAME.IconGift:
                SVG = SVGGift;
                break;
            case ISvg.NAME.IconClock:
                SVG = SVGClock;
                break;
            case ISvg.NAME.AngleRight:
                SVG = SVGAngleRight;
                break;
            case ISvg.NAME.IconBellNoti:
                SVG = SVGBellNoti;
                break;
            case ISvg.NAME.NOTI_APP:
                SVG = SVGNotiApp;
                break;
            case ISvg.NAME.SHOW_PASSWORD:
                SVG = SVGShowPassword;
                break;
            case ISvg.NAME.HIDE_PASSWORD:
                SVG = SVGHidePassword;
                break;
            case ISvg.NAME.Hide:
                SVG = SVGHide;
                break;
            case ISvg.NAME.CheckFalse:
                SVG = SVGCheckFalse;
                break;
            case ISvg.NAME.CheckTrue:
                SVG = SVGCheckTrue;
                break;
            case ISvg.NAME.UserPhanQuyen:
                SVG = SVGUserPhanQuyen;
                break;
            case ISvg.NAME.WAREHOUSE:
                SVG = SVGWarehouse;
                break;
            case ISvg.NAME.CHECK_CIRCLE:
                SVG = SVGCheckCircle;
                break;
            case ISvg.NAME.Banner:
                SVG = SVGBanner;
                break;
            case ISvg.NAME.LISTVIEW:
                SVG = SVGListView;
                break;
            case ISvg.NAME.ORDER:
                SVG = SVGOrder;
                break;

            case ISvg.NAME.TAG:
                SVG = SVGTag;
                break;

            case ISvg.NAME.STORE:
                SVG = SVGStore;
                break;

            case ISvg.NAME.BROADCAST:
                SVG = SVGBroadcast;
                break;

            case ISvg.NAME.ARCHIVE:
                SVG = SVGArchive;
                break;

            case ISvg.NAME.MAIN:
                SVG = SVGMain;
                break;

            case ISvg.NAME.BELL:
                SVG = SVGBell;
                break;

            case ISvg.NAME.MENU:
                SVG = SVGMenu;
                break;
            case ISvg.NAME.USER:
                SVG = SVGUser;
                break;
            case ISvg.NAME.SEARCH:
                SVG = SVGSearch;
                break;
            case ISvg.NAME.ARROWUP:
                SVG = SVGArrowUp;
                break;
            case ISvg.NAME.DOWLOAND:
                SVG = SVGDowloand;
                break;
            case ISvg.NAME.DELETE:
                SVG = SVGDelete;
                break;
            case ISvg.NAME.EXPERIMENT:
                SVG = SVGExperiment;
                break;
            case ISvg.NAME.APPLICATION:
                SVG = SVGApplication;
                break;
            case ISvg.NAME.WRITE:
                SVG = SVGWrite;
                break;
            case ISvg.NAME.SEE:
                SVG = SVGSee;
                break;
            case ISvg.NAME.CHEVRONRIGHT:
                SVG = SVGChevronRight;
                break;
            case ISvg.NAME.PRINT:
                SVG = SVGPrint;
                break;
            case ISvg.NAME.SWAP:
                SVG = SVGSwap;
                break;
            case ISvg.NAME.CHECKLIST:
                SVG = SVGCheckList;
                break;
            case ISvg.NAME.CROSS:
                SVG = SVGCross;
                break;
            case ISvg.NAME.SAVE:
                SVG = SVGSave;
                break;
            case ISvg.NAME.ADD:
                SVG = SVGAdd;
                break;
            case ISvg.NAME.BUTTONADD:
                SVG = SVGButtonAdd;
                break;
            case ISvg.NAME.LOCATION:
                SVG = SVGLocation;
                break;
            case ISvg.NAME.CHECKMARK:
                SVG = SVGCheckMark;
                break;
            case ISvg.NAME.ARROWTHINLEFT:
                SVG = SVGArrowThinLeft;
                break;
            case ISvg.NAME.UPLOAD:
                SVG = SVGUpload;
                break;
            case ISvg.NAME.STATS:
                SVG = SVGStats;
                break;
            case ISvg.NAME.COPY:
                SVG = SVGCopy;
                break;
            case ISvg.NAME.SHIPPER:
                SVG = SVGShipper;
                break;
            case ISvg.NAME.CLOSEMODAL:
                SVG = SVGCloseModal;
                break;
            case ISvg.NAME.ADDFILE:
                SVG = SVGAddFile;
                break;
            case ISvg.NAME.ARROWRIGHT:
                SVG = SVGArrowRight;
                break;
            case ISvg.NAME.LIST:
                SVG = SVGList;
                break;
            case ISvg.NAME.BRIEFCASE:
                SVG = SVGBriefcase;
                break;
            case ISvg.NAME.TIMEREVERSE:
                SVG = SVGTimeReverse;
                break;
            case ISvg.NAME.ARROWTHINRIGHT:
                SVG = SVGArrowThinRight;
                break;
            case ISvg.NAME.BUTTONRIGHT:
                SVG = SVGButtonRight;
                break;
            case ISvg.NAME.SALEMAN:
                SVG = SVGSaleMan;
                break;
            case ISvg.NAME.VIEWLIST:
                SVG = SVGViewList;
                break;
            case ISvg.NAME.ADDUPLOAD:
                SVG = SVGAddUpload;
                break;
            case ISvg.NAME.ArrowThinup:
                SVG = SVGArrowThinup;
                break;
            case ISvg.NAME.ArrowThindown:
                SVG = SVGArrowThindown;
                break;
            case ISvg.NAME.Chat:
                SVG = SVGChat;
                break;
            case ISvg.NAME.Preview:
                SVG = SVGPreview;
                break;
            case ISvg.NAME.Post:
                SVG = SVGPost;
                break;
            case ISvg.NAME.Wifi:
                SVG = SVGWifi;
                break;
            case ISvg.NAME.Article:
                SVG = SVGArticle;
                break;
            case ISvg.NAME.Chart:
                SVG = SVGChart;
                break;
            case ISvg.NAME.Dashboard:
                SVG = SVGDashboard;
                break;
            case ISvg.NAME.SVGArrowRight1:
                SVG = SVGArrowRight1;
                break;
            case ISvg.NAME.SVGBlog:
                SVG = SVGBlog;
                break;
            case ISvg.NAME.SVGMenuAgency:
                SVG = SVGMenuAgency;
                break;
            case ISvg.NAME.SVGMenuNew:
                SVG = SVGMenuNew;
                break;
            case ISvg.NAME.Debit:
                SVG = SVGDebit;
                break;
        }
        if (SVG === null) {
            return null;
        }
        return (
            <SVG
                className={name}
                width={width}
                height={height}
                fill={fill}
                fillOpacity={opacity}
            // className={}
            // onMouseEnter={this.toggleHover}
            // onMouseLeave={this.toggleHover}
            />
        );
    }

    // toggleHover = () => {
    //   this.setState({ hover: !this.state.hover });
    // };
}

export default ISvg;
