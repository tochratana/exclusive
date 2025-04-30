// Get DOM elements
const mobileSidebar = document.getElementById("mobile-sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const closeSidebarButton = document.getElementById("close-sidebar");

// Function to open sidebar
function openSidebar() {
  mobileSidebar.classList.remove("-translate-x-full");
  sidebarOverlay.classList.add("opacity-50");
  sidebarOverlay.classList.remove("pointer-events-none");
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Function to close sidebar
function closeSidebar() {
  mobileSidebar.classList.add("-translate-x-full");
  sidebarOverlay.classList.remove("opacity-50");
  sidebarOverlay.classList.add("pointer-events-none");
  document.body.style.overflow = ""; // Allow scrolling
}

// Event listeners
mobileMenuButton.addEventListener("click", openSidebar);
closeSidebarButton.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

// Close sidebar when window is resized to desktop size
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    // 768px is the md breakpoint in Tailwind
    closeSidebar();
  }
});
