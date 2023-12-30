function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800 dark:text-gray-100">
      {children}
    </div>
  );
}

export default Layout;
