export interface SideNavInterface {
    path: string;
    permission:any;
    title: string;
    iconType: "" | "nzIcon" | "fontawesome";
    iconTheme: "" | "fab" | "far" | "fas" | "fill" | "outline" | "twotone";
    icon: string,
    submenu : SideNavInterface[];
}
