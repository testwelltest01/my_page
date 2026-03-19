import React, { createContext, useState } from "react";
import { memoData as initialData } from "../data/memoData";

// 1. 컨텍스트 생성
export const MemoContext = createContext();

// 2. 공급자(Provider) 컴포넌트 생성
export const MemoProvider = ({ children }) => {
  const [memos, setMemos] = useState(initialData);

  // 메모 추가
  const addMemo = (title, content) => {
    const newMemo = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setMemos([newMemo, ...memos]);
  };

  // 메모 수정
  const updateMemo = (id, title, content) => {
    const today = new Date().toISOString().split("T")[0];
    setMemos(
      memos.map((m) =>
        m.id === id ? { ...m, title, content, updatedAt: today } : m
      )
    );
  };

  // 메모 삭제 (Soft Delete)
  const deleteMemo = (id) => {
    const today = new Date().toISOString().split("T")[0];
    setMemos(
      memos.map((m) => (m.id === id ? { ...m, deletedAt: today } : m))
    );
  };

  return (
    <MemoContext.Provider value={{ memos, addMemo, updateMemo, deleteMemo }}>
      {children}
    </MemoContext.Provider>
  );
};
