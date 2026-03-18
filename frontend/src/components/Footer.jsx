function Footer() {
  return (
    <footer className="sticky bottom-4 z-50 mac-card m-4 mt-auto flex justify-between items-center py-3 backdrop-blur-md bg-mac-surface-opaque/70 border-t border-[var(--mac-border)] shadow-lg">
      <div className="mac-caption">
        Mac OS의 디자인 시스템에 근거하여 제작된 사이트
      </div>
      <div className="flex gap-4">
        <span className="mac-caption hover:text-[var(--mac-text)]">
          2026년 3월 12일 수업 중 제작
        </span>
      </div>
    </footer>
  );
}

export default Footer;
