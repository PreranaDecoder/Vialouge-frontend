import { FC, useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  ChevronDown,
  Upload,
  Ban,
  MessageSquare,
  FileText,
  Link2,
  Volume2,
  LayoutGrid,
  Download,
  FileQuestion,
} from "lucide-react";

const navItems = [
  {
    heading: "Contact Management",
    items: [
      {
        label: "Upload Contacts List",
        icon: <Upload size={18} />,
        path: "/upload-contacts",
      },
      {
        label: "Blacklist Contacts",
        icon: <Ban size={18} />,
        path: "/blacklist",
      },
    ],
  },
  {
    heading: "SMS",
    items: [
      {
        label: "Distributed Ledger",
        icon: <MessageSquare size={18} />,
        children: [
          { label: "Sender ID's", path: "/sender-ids" },
          { label: "Content Templates", path: "/content-templates" },
        ],
      },
      {
        label: "CTA Management",
        icon: <Link2 size={18} />,
        children: [
          { label: "Shortened URLs", path: "/shortened-urls" },
          { label: "Domain Manager", path: "/domain-manager" },
        ],
      },
      {
        label: "Campaigns",
        icon: <Volume2 size={18} />,
        children: [
          { label: "Static Campaign", path: "/static-campaign" },
          { label: "Dynamic Campaign", path: "/dynamic-campaign" },
          { label: "Scheduled Campaigns", path: "/scheduled-campaigns" },
        ],
      },
      {
        label: "Reports",
        icon: <FileText size={18} />,
        children: [
          { label: "Summary Report", path: "/summary-report" },
          { label: "Sender Wise", path: "/sender-wise" },
          { label: "Detailed Report", path: "/detailed-report" },
        ],
      },
      { label: "Downloads", icon: <Download size={18} />, path: "/downloads" },
      {
        label: "Documentation",
        icon: <FileQuestion size={18} />,
        path: "/documentation",
      },
    ],
  },
];

export const Layout: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Mobile menu button */}
      {isMobile && (
        <Button
          variant="ghost"
          className="fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </Button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 w-64 h-screen
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          transition-transform duration-300 bg-white border-r border-[#E2E8F0]
        `}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-[#E2E8F0]">
            <img
              src="/src/assets/Logo-black.png"
              alt="Vialogue"
              className="h-12"
            />
          </div>
          <nav className="flex-1 p-4 overflow-y-auto">
            <Link to="/dashboard">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  location.pathname === "/dashboard"
                    ? "bg-[#F0FDF4] text-[#059669]"
                    : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                } mb-6`}
              >
                <LayoutGrid size={18} className="mr-2" /> Dashboard
              </Button>
            </Link>

            {navItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                <h2 className="text-xs font-medium text-[#64748B] mb-4 px-2">
                  {section.heading}
                </h2>
                {section.items.map((item, index) => (
                  <div key={index} className="mb-1">
                    {item.children ? (
                      <>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-9 px-2 text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                          onClick={() => toggleExpanded(item.label)}
                        >
                          {item.icon && (
                            <span className="mr-2 text-[#94A3B8]">
                              {item.icon}
                            </span>
                          )}
                          <span className="text-sm">{item.label}</span>
                          <ChevronDown
                            size={16}
                            className={`ml-auto transition-transform ${
                              expandedItems.includes(item.label)
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </Button>
                        {expandedItems.includes(item.label) && (
                          <div className="relative pl-7">
                            <div className="absolute left-[1.1rem] top-0 bottom-0 w-[1.5px] bg-[#E2E8F0]" />
                            {item.children.map((child, childIndex) => (
                              <Link key={childIndex} to={child.path}>
                                <Button
                                  variant="ghost"
                                  className={`w-full justify-start h-8 px-4 text-sm ${
                                    location.pathname === child.path
                                      ? "text-[#059669] bg-[#F0FDF4]"
                                      : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                                  }`}
                                >
                                  {child.label}
                                </Button>
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link to={item.path}>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start h-9 px-2 ${
                            location.pathname === item.path
                              ? "text-[#059669] bg-[#F0FDF4]"
                              : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                          }`}
                        >
                          {item.icon && (
                            <span className="mr-2 text-[#94A3B8]">
                              {item.icon}
                            </span>
                          )}
                          <span className="text-sm">{item.label}</span>
                        </Button>
                      </Link>
                    )}
                  </div>
                ))}
                {sectionIndex < navItems.length - 1 && (
                  <div className="my-4 border-t border-[#E2E8F0]" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`
          flex-1 min-h-screen 
          ${isSidebarOpen ? "lg:ml-64" : ""} 
          transition-all duration-300
        `}
      >
        <Outlet />
      </main>

      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};
