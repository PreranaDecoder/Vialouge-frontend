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
import { UserProfileButton } from "@/components/userProfileButton/userProfileButton";
import { Trash2, Download, Plus } from "lucide-react";

export const SenderIds = () => {
  const [isCreateView, setIsCreateView] = useState(false);
  const [templateType, setTemplateType] = useState("");
  const [entityId, setEntityId] = useState("");
  const [senderId, setSenderId] = useState("");

  const senderIds = [
    { id: "MEDNTA", entityId: "160110000000000352", type: "OTHERS" },
    { id: "MEDNTA", entityId: "160110000000000352", type: "OTHERS" },
    { id: "MEDNTA", entityId: "160110000000000352", type: "OTHERS" },
    { id: "MEDNTA", entityId: "160110000000000352", type: "OTHERS" },
    { id: "MEDNTA", entityId: "160110000000000352", type: "OTHERS" },
  ];

  if (isCreateView) {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Add Sender IDs</h1>
          <UserProfileButton />
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Content Template Type
              </label>
              <Select value={templateType} onValueChange={setTemplateType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Content Template Type" />
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
                  Entity ID
                </label>
                <Input
                  placeholder="Eg. 160110000000000352"
                  value={entityId}
                  onChange={(e) => setEntityId(e.target.value)}
                />
                {entityId && !/^\d+$/.test(entityId) && (
                  <p className="text-red-500 text-sm mt-1">
                    Validation error if incorrect
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Sender ID
                </label>
                <Input
                  placeholder="Eg. VIALOG"
                  value={senderId}
                  onChange={(e) => setSenderId(e.target.value)}
                />
                {senderId && !/^[A-Z]+$/.test(senderId) && (
                  <p className="text-red-500 text-sm mt-1">
                    Validation error if incorrect
                  </p>
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-center">
                <span className="text-gray-600">+ Add Sender ID</span>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <Button variant="outline" onClick={() => setIsCreateView(false)}>
                Reset
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                Create Sender IDs
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
        <h1 className="text-2xl font-bold">Sender IDs</h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Trash2 className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Download className="h-5 w-5" />
            </Button>
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
              onClick={() => setIsCreateView(true)}
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New
            </Button>
          </div>
          <UserProfileButton />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <Input
            type="search"
            placeholder="Search For Sender ID"
            className="max-w-md"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-200">
                <th className="w-12 py-3 px-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-900">
                  Sender ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-900">
                  Entity ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-900">
                  Sender ID Type
                </th>
              </tr>
            </thead>
            <tbody>
              {senderIds.map((sender, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {sender.id}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {sender.entityId}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {sender.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex items-center justify-between border-t border-gray-200">
          <span className="text-sm text-gray-600">
            0 of {senderIds.length} row(s) selected.
          </span>
          <div className="flex items-center gap-2">
            <select className="text-sm border border-gray-300 rounded px-2 py-1.5">
              <option>10 Rows</option>
              <option>20 Rows</option>
              <option>50 Rows</option>
            </select>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                className="text-gray-600"
                disabled
              >
                Previous
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                1
              </Button>
              <Button
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                2
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                3
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
