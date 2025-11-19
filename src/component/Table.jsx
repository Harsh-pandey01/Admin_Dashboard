import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import { MdOutlineEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";

export default function ProductsTableOneFile() {
  // -----------------------
  // DUMMY DATA
  // -----------------------
  const data = [
    {
      productId: "PROD-001",
      productName: "Wireless Bluetooth Headphones",
      productDescription:
        "High quality over-ear Bluetooth headphones with mic.",
      productImages: [
        "https://t3.ftcdn.net/jpg/02/28/19/26/360_F_228192611_akMH8f6lbZ2NedZluGMgZCco0aKRKtGk.jpg",
      ],
      productPrice: 1999,
      productStock: 35,
      productCategory: "electronics-audio",
      createdAt: { seconds: 1709459200, nanoseconds: 0 },
    },
    {
      productId: "PROD-002",
      productName: "Smart Fitness Watch Pro",
      productDescription: "Tracks heart rate, sleep, oxygen and calories.",
      productImages: [
        "https://cdn.mos.cms.futurecdn.net/qJuirjNquuaVXNzQxuwaYM.jpg",
      ],
      productPrice: 2999,
      productStock: 50,
      productCategory: "electronics-wearables",
      createdAt: { seconds: 1709200000, nanoseconds: 0 },
    },
    {
      productId: "PROD-003",
      productName: "Cotton Oversized T-Shirt",
      productDescription: "Premium 100% cotton oversized T-shirt for men.",
      productImages: [
        "https://media.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000014105668-Beige-BEIGE-1000014105668_01-2100.jpg",
      ],
      productPrice: 799,
      productStock: 120,
      productCategory: "fashion-men",
      createdAt: { seconds: 1708500000, nanoseconds: 0 },
    },
    {
      productId: "PROD-004",
      productName: "Running Shoes MaxAir",
      productDescription: "Lightweight breathable running shoes.",
      productImages: [
        "https://www.asics.co.in/media/catalog/product/1/0/1011b794_401_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=375&width=500&auto=webp&format=pjpg",
      ],
      productPrice: 2499,
      productStock: 22,
      productCategory: "fashion-footwear",
      createdAt: { seconds: 1707800000, nanoseconds: 0 },
    },
    {
      productId: "PROD-005",
      productName: "Gaming RGB Keyboard",
      productDescription: "Mechanical keyboard with RGB lighting.",
      productImages: [
        "https://images-cdn.ubuy.co.in/6369a6836eb9666b7c5da2c6-x9-tactile-rgb-mechanical-keyboard.jpg",
      ],
      productPrice: 1499,
      productStock: 60,
      productCategory: "electronics-gaming",
      createdAt: { seconds: 1707000000, nanoseconds: 0 },
    },
  ];

  // -----------------------
  // COLUMNS
  // -----------------------
  const columns = [
    {
      header: "ID",
      accessorKey: "productId",
      cell: ({ row }) => row.original.productId,
    },

    {
      header: "PRODUCT",
      accessorKey: "productName",
      cell: ({ row }) => {
        const { productImages, productName, productDescription } = row.original;
        return (
          <div className="flex gap-3 items-center">
            <img
              src={productImages?.[0] ?? "/placeholder.png"}
              className="h-16 w-16 object-cover rounded-md border border-border"
              alt="product"
            />
            <div className="flex flex-col">
              <p className="font-semibold">{productName}</p>
              <p className="text-text/60 text-sm">
                {productDescription?.slice(0, 40)}…
              </p>
            </div>
          </div>
        );
      },
    },

    {
      header: "PRICE",
      accessorKey: "productPrice",
      cell: ({ row }) => `₹ ${row.original.productPrice}`,
    },

    {
      header: "STOCK",
      accessorKey: "productStock",
      cell: ({ row }) => (
        <span>{row.original.productStock.toLocaleString()} left</span>
      ),
    },

    {
      header: "CATEGORY",
      accessorKey: "productCategory",
      cell: ({ row }) =>
        row.original.productCategory
          .split("-")
          .map((w) => w[0].toUpperCase() + w.slice(1))
          .join(" "),
    },

    {
      header: "LISTING DATE",
      accessorKey: "createdAt",
      cell: ({ row }) => {
        const ts = row.original.createdAt;
        if (!ts?.seconds) return "—";
        return new Date(ts.seconds * 1000).toLocaleDateString();
      },
    },

    {
      id: "actions",
      header: "ACTIONS",
      cell: ({ row }) => {
        const item = row.original;
        return (
          <div className="flex gap-2">
            <button
              className="p-2 border border-border rounded-md hover:bg-secondry"
              onClick={() => console.log("Edit:", item)}
            >
              <MdOutlineEdit />
            </button>
            <button
              className="p-2 border border-red-400 text-red-500 rounded-md hover:bg-red-100"
              onClick={() => console.log("Delete:", item)}
            >
              <AiTwotoneDelete />
            </button>
          </div>
        );
      },
    },
  ];

  // -----------------------
  // TABLE INSTANCE
  // -----------------------
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // -----------------------
  // RENDER TABLE
  // -----------------------
  return (
    <div className="p-5">
      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full min-w-250 text-left">
          <thead className="bg-muted text-sm font-semibold">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 border-b border-border"
                  >
                    {header.isPlaceholder
                      ? null
                      : header.column.columnDef.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-border text-sm">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-secondry">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3">
                    {cell.column.columnDef.cell({ row })}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
