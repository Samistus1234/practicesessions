# ELAB NCLEX Dashboard

A modern, responsive dashboard interface for the ELAB NCLEX tutorial program. This dashboard provides students with a comprehensive view of their course progress, assignments, resources, and study analytics.

## Features

### 📊 Progress Tracking
- Visual progress bar showing course completion (Week 3 of 8, 42% completed)
- Weekly program roadmap with status indicators
- Personal analytics including completion rate, average scores, and study streaks

### 📚 Assignment Management
- "Next up" card highlighting current priority assignment
- Filterable work items (All, Pending, Completed)
- Assignment status badges (In progress, Not started, Completed)
- Due date tracking and progress indicators

### 🎓 Course Information
- Current cohort and program details
- Next live class schedule with countdown
- Week-by-week curriculum overview

### 📖 Resources & Support
- Quick access to class resources (PDFs, drug sheets, replays)
- Announcements from tutors
- Help and support options

### 🎨 User Interface
- Clean, professional design
- Responsive layout (mobile, tablet, desktop)
- Interactive elements with hover effects
- Real-time notifications for user actions

## File Structure

```
.
├── nclex-dashboard.html    # Main HTML structure
├── styles.css              # Complete styling and responsive design
├── script.js               # Interactive features and functionality
└── README.md               # This file
```

## How to Use

### Opening the Dashboard

1. **Local File**: Simply open `nclex-dashboard.html` in any modern web browser
2. **Live Server**: Use a local development server for the best experience

### Interactive Features

#### Filter Assignments
- Click on "All", "Pending", or "Completed" tabs to filter work items
- Active tab is highlighted in blue

#### Start/Continue Work
- Click "Continue assignment" or "Start now" buttons to begin work
- Click "View details" for more information about assignments

#### Access Resources
- Click "Open" links in the Class Resources section to view materials

#### Get Help
- Use "Ask your tutor" or "Contact ELAB Support" links in the Need Help section

## Design Specifications

### Color Palette
- **Primary Blue**: `#3498db` - Main actions, links, progress
- **Dark Gray**: `#2c3e50` - Header, headings, primary text
- **Success Green**: `#27ae60` - Completed items
- **Warning Red**: `#e74c3c` - Current/urgent items
- **Light Gray**: `#ecf0f1` - Backgrounds, borders

### Typography
- Font Family: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- Base Font Size: 14px
- Headings: 600 weight
- Body Text: Normal weight, #333 color

### Responsive Breakpoints
- **Desktop**: > 1024px (Two-column layout)
- **Tablet**: 768px - 1024px (Single column, sidebar first)
- **Mobile**: < 768px (Stacked layout, simplified navigation)

## Browser Compatibility

The dashboard is compatible with:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Customization

### Updating Progress
Edit the progress bar width in `nclex-dashboard.html`:
```html
<div class="progress-bar" style="width: 42%"></div>
```

### Adding New Assignments
Copy the work item structure:
```html
<div class="work-item">
    <div class="work-item-header">
        <span class="work-type">[Assignment]</span>
        <span class="work-title">Your Assignment Title</span>
    </div>
    <!-- Add status and actions -->
</div>
```

### Modifying Colors
Update the CSS variables in `styles.css` to match your brand colors.

## JavaScript Features

### Implemented Functionality
- **Tab Filtering**: Dynamic filtering of work items by status
- **Button Handlers**: Interactive assignment and resource actions
- **Notifications**: Toast-style notifications for user feedback
- **Progress Animation**: Smooth progress bar animation on load
- **Responsive Handling**: Mobile-optimized interactions
- **Logout Confirmation**: Safe logout with user confirmation

### Event Listeners
- Click handlers for all interactive buttons
- Tab switching for assignment filters
- Resource and help link handlers
- Hover effects for enhanced UX

## Future Enhancements

Potential additions for future versions:
- Backend API integration for real-time data
- User authentication and session management
- Assignment submission functionality
- Live class video integration
- Study analytics dashboard
- Peer discussion forums
- Calendar integration for due dates
- Push notifications for upcoming classes
- Mobile app version

## Development Notes

### Prerequisites
- Modern web browser
- Text editor (optional, for modifications)
- Local server (optional, for development)

### Testing
1. Open `nclex-dashboard.html` in a browser
2. Test all interactive elements (buttons, tabs, links)
3. Resize browser window to test responsive design
4. Check console for any JavaScript errors

### Performance
- Lightweight: ~30KB total (HTML + CSS + JS)
- Fast load times
- No external dependencies
- Optimized images and assets

## Support

For issues or questions about the dashboard:
1. Check the browser console for error messages
2. Verify all files are in the same directory
3. Ensure JavaScript is enabled in your browser

## License

This dashboard is created for educational purposes as part of the ELAB NCLEX tutorial program.

## Version History

- **v1.0.0** (2025-11-14)
  - Initial release
  - Complete UI implementation
  - Responsive design
  - Interactive features
  - Documentation

---

**Built with ❤️ for NCLEX students**
