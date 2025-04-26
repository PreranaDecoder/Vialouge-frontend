import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Download, Plus } from "lucide-react";
import { UserProfileButton } from "@/components/userProfileButton/userProfileButton";

export const ContentTemplates = () => {
  const [isCreateView, setIsCreateView] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 3;

  const templates = [
    {
      id: "10070052",
      name: "Name of the template",
      type: "Promotional",
      headers: "VILOGE,VIALGE",
      tsp: "Vodafone Idea",
      textType: "Text",
    },
    {
      id: "10070052",
      name: "Name of the template",
      type: "Promotional",
      headers: "VILOGE,VIALGE",
      tsp: "Vodafone Idea",
      textType: "Text",
    },
    {
      id: "10070052",
      name: "Name of the template",
      type: "Promotional",
      headers: "VILOGE,VIALGE",
      tsp: "Vodafone Idea",
      textType: "Text",
    },
  ];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isCreateView) {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Add Content Template</h1>
          <UserProfileButton />
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Content Template Type
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Type Of Content Template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="promotional">Promotional</SelectItem>
                  <SelectItem value="transactional">Transactional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Sender ID
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sender ID" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="id1">Sender ID 1</SelectItem>
                    <SelectItem value="id2">Sender ID 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Entity ID
                </label>
                <Input placeholder="Eg. 160110000000000352" disabled />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Content Template Name
                </label>
                <Input placeholder="Template Name" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Template ID
                </label>
                <Input placeholder="Eg. 1007007731492574796" disabled />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Template Content Type
              </label>
              <div className="flex gap-4">
                <Button variant="outline" className="bg-gray-100">
                  Plain Text
                </Button>
                <Button variant="outline">Unicode</Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message Text
              </label>
              <Textarea placeholder="Message Text" className="h-32" />
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-emerald-500">70 Characters</span>
                <span className="text-red-500">1 SMS Credit(s)</span>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <Button variant="outline" onClick={() => setIsCreateView(false)}>
                Reset
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                Create Template
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Content Templates</h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Trash2 className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Download className="h-5 w-5" />
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Upload
            </Button>
            <Button
              className="bg-emerald-500 hover:bg-emerald-600"
              onClick={() => setIsCreateView(true)}
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New
            </Button>
          </div>
          <UserProfileButton />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          <Input
            type="search"
            placeholder="Search For Template ID, Template Name"
            className="max-w-md"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-y border-gray-200">
              <tr>
                <th className="w-12 p-4">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="text-left p-4 font-medium">Template ID</th>
                <th className="text-left p-4 font-medium">Template Name</th>
                <th className="text-left p-4 font-medium">Template Type</th>
                <th className="text-left p-4 font-medium">Headers</th>
                <th className="text-left p-4 font-medium">Registered TSP</th>
                <th className="text-left p-4 font-medium">Text Type</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="p-4 text-emerald-600">{template.id}</td>
                  <td className="p-4">{template.name}</td>
                  <td className="p-4">{template.type}</td>
                  <td className="p-4">{template.headers}</td>
                  <td className="p-4">{template.tsp}</td>
                  <td className="p-4">{template.textType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">0 of 5 row(s) selected.</span>
          <div className="flex items-center gap-2">
            <select className="rounded border p-1">
              <option>10 Rows</option>
              <option>20 Rows</option>
              <option>50 Rows</option>
            </select>
            <Button
              variant="outline"
              className="text-gray-600"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                className={
                  currentPage === page
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "text-gray-600"
                }
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              className="text-gray-600"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
