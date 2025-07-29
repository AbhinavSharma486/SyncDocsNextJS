# Sync Docs - Real-Time Collaborative Document Editor

A modern, feature-rich real-time collaborative document editing platform built with Next.js, Liveblocks, and Lexical editor. Sync Docs enables teams to create, edit, and collaborate on documents in real-time with advanced features like comments, notifications, and user management.

## 🚀 Features

### Core Features
- **Real-time Collaboration**: Multiple users can edit documents simultaneously with live cursor tracking
- **Rich Text Editor**: Powered by Lexical editor with comprehensive formatting options
- **Document Management**: Create, edit, delete, and organize documents
- **User Authentication**: Secure authentication using Clerk
- **Role-based Access Control**: Editor and Viewer permissions for document access

### Advanced Features
- **Live Comments & Threads**: Add comments and create discussion threads within documents
- **Real-time Notifications**: Get notified about mentions, document access, and collaboration activities
- **Active Collaborators Display**: See who's currently editing the document with colored avatars
- **Document Sharing**: Invite users with specific permissions (Editor/Viewer)
- **Document History**: Undo/Redo functionality with collaborative history
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Mention System**: @mention users in comments and threads
- **Auto-save**: Automatic document saving with real-time sync
- **Document Title Editing**: Inline document title editing for quick updates

### Editor Features
- **Text Formatting**: Bold, Italic, Underline, Strikethrough
- **Block Elements**: Headings (H1, H2, H3), Quotes, Paragraphs
- **Text Alignment**: Left, Center, Right, Justify
- **Floating Toolbar**: Context-aware formatting toolbar for text selection
- **Comment Integration**: Select text and add comments via floating toolbar
- **Keyboard Shortcuts**: Standard editor shortcuts (Ctrl+Z, Ctrl+Y)
- **Placeholder Text**: Helpful placeholder text for new documents

### User Management Features
- **User Color Assignment**: Automatic color assignment for user avatars
- **Permission Management**: Change user permissions (Editor/Viewer) in real-time
- **Collaborator Removal**: Remove collaborators from documents
- **Owner Protection**: Document creators cannot be removed from their own documents
- **User Suggestions**: Smart user suggestions for mentions and sharing

## 🛠️ Tech Stack

### Frontend
- **Next.js 14.2.6**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible UI components
- **shadcn/ui**: Component library configuration

### Real-time Collaboration
- **Liveblocks**: Real-time collaboration infrastructure
- **@liveblocks/react**: React hooks for Liveblocks
- **@liveblocks/react-lexical**: Lexical editor integration
- **@liveblocks/react-ui**: UI components for collaboration features
- **@liveblocks/node**: Server-side Liveblocks integration

### Editor
- **Lexical**: Facebook's text editor framework
- **@lexical/react**: React integration for Lexical
- **@lexical/rich-text**: Rich text editing capabilities
- **@floating-ui/react-dom**: Floating UI for toolbar positioning

### Authentication & User Management
- **Clerk**: Authentication and user management
- **@clerk/nextjs**: Next.js integration for Clerk
- **@clerk/themes**: Customizable Clerk themes

### Utilities
- **nanoid**: Unique ID generation
- **clsx**: Conditional CSS classes
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind CSS class merging
- **lucide-react**: Icon library
- **jsm-editor**: Additional editor utilities

## 📁 Project Structure

```
sync-docs/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/             # Sign-in page
│   │   │   └── [[...sign-in]]/  # Dynamic sign-in routes
│   │   └── sign-up/             # Sign-up page
│   │       └── [[...sign-up]]/  # Dynamic sign-up routes
│   ├── (root)/                   # Protected routes
│   │   ├── documents/           # Document pages
│   │   │   └── [id]/            # Individual document editor
│   │   └── page.tsx             # Home dashboard
│   ├── api/                      # API routes
│   │   └── liveblocks-auth/     # Liveblocks authentication endpoint
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with Clerk provider
│   └── Provider.tsx             # Liveblocks provider wrapper
├── components/                   # React components
│   ├── editor/                  # Editor components
│   │   ├── Editor.tsx           # Main editor component with Lexical
│   │   └── plugins/             # Editor plugins
│   │       ├── ToolbarPlugin.tsx    # Text formatting toolbar
│   │       ├── FloatingToolbarPlugin.tsx # Floating toolbar for comments
│   │       └── Theme.ts         # Lexical editor theme configuration
│   ├── ui/                      # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── popover.tsx
│   │   └── select.tsx
│   ├── ActiveCollaborators.tsx  # Live collaborator display with avatars
│   ├── AddDocumentBtn.tsx       # Document creation button
│   ├── CollaborativeRoom.tsx    # Main collaboration room component
│   ├── Comments.tsx             # Comments and threads display
│   ├── Collaborator.tsx         # Individual collaborator management
│   ├── DeleteModal.tsx          # Document deletion confirmation
│   ├── Header.tsx               # Application header with logo
│   ├── Loader.tsx               # Loading spinner component
│   ├── Notifications.tsx        # Notification system with inbox
│   ├── ShareModel.tsx           # Document sharing modal
│   └── UserTypeSelector.tsx     # User permission selector dropdown
├── lib/                         # Utility libraries
│   ├── actions/                 # Server actions
│   │   ├── room.actions.ts      # Document/room CRUD operations
│   │   └── user.actions.ts      # User management operations
│   ├── liveblocks.ts            # Liveblocks client configuration
│   └── utils.ts                 # Utility functions and helpers
├── types/                       # TypeScript type definitions
│   └── index.d.ts              # Global type declarations
├── public/                      # Static assets
│   ├── assets/                  # Icons and images
│   │   ├── icons/              # SVG icons for UI elements
│   │   └── images/             # Background images and logos
│   ├── images/                  # Brand images
│   └── site.webmanifest        # PWA manifest
├── styles/                      # Theme styles
│   ├── dark-theme.css          # Dark theme variables
│   └── light-theme.css         # Light theme variables
├── liveblocks.config.ts         # Liveblocks type configuration
├── middleware.ts                # Next.js middleware for Clerk
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── components.json             # shadcn/ui configuration
├── postcss.config.mjs          # PostCSS configuration
└── package.json                # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Liveblocks account
- Clerk account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sync-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Liveblocks
   NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5000](http://localhost:5000)

## 🔧 Configuration

### Liveblocks Setup
1. Create a Liveblocks account at [liveblocks.io](https://liveblocks.io)
2. Create a new project
3. Copy your secret key and public key to environment variables
4. Configure room permissions and access patterns
5. Set up user authentication endpoint

### Clerk Setup
1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Configure authentication methods (email, social logins)
4. Copy your publishable key and secret key to environment variables
5. Configure user profile fields (firstName, lastName, emailAddresses, imageUrl)

### Next.js Configuration
The project includes custom Next.js configuration:
- TypeScript build errors ignored for development
- Remote image patterns configured for Clerk avatars
- Custom port configuration (5000)

### Tailwind CSS Configuration
Custom color palette and styling:
- **Blue Colors**: 100, 400, 500 variants
- **Red Colors**: 400, 500 variants  
- **Dark Colors**: 100, 200, 300, 350, 400, 500 variants
- **Custom Backgrounds**: Document and modal backgrounds
- **Custom Animations**: Accordion animations

## 📖 Usage Guide

### Creating Documents
1. Sign in to your account
2. Click the "Start a black document" button on the home page
3. Enter a title for your document (editable inline)
4. Start editing with the rich text editor

### Collaborating
1. Open a document
2. Click the "Share" button in the header
3. Enter the email address of the person you want to invite
4. Select their permission level (Editor or Viewer)
5. Click "Invite"
6. Manage existing collaborators' permissions

### Using the Editor
- **Text Formatting**: Use the toolbar to format text (bold, italic, underline, strikethrough)
- **Block Elements**: Create headings (H1, H2, H3) and quotes
- **Text Alignment**: Align text left, center, right, or justify
- **Comments**: Select text and use the floating toolbar to add comments
- **Undo/Redo**: Use the toolbar buttons or keyboard shortcuts (Ctrl+Z, Ctrl+Y)
- **Document Title**: Click the edit icon next to the title to modify it

### Notifications
- View notifications by clicking the bell icon in the header
- Get notified about:
  - Document access invitations
  - Mentions in comments (@username)
  - Thread replies
  - Permission changes

### User Management
- **Change Permissions**: Use the dropdown in the share modal to change user types
- **Remove Collaborators**: Click "Remove" button for any collaborator
- **Owner Protection**: Document creators cannot be removed from their own documents
- **User Colors**: Each user gets a unique color for their avatar

## 🔒 Security Features

- **Authentication**: Secure user authentication with Clerk
- **Authorization**: Role-based access control for documents
- **Real-time Security**: Liveblocks handles real-time security
- **Input Validation**: Server-side validation for all operations
- **CORS Protection**: Configured middleware for API protection
- **User Verification**: Email-based user verification
- **Session Management**: Secure session handling

## 🎨 Styling & Theming

The application uses a dark theme by default with:
- **Color Scheme**: Dark background with blue accents
- **Typography**: Inter font family
- **Responsive Design**: Mobile-first approach
- **Custom Scrollbars**: Styled scrollbars for better UX
- **Component Variants**: Consistent button and input styling
- **Custom Icons**: SVG icons for all UI elements
- **Background Images**: Custom document and modal backgrounds

### Custom CSS Classes
- **Gradient Buttons**: Blue and red gradient buttons
- **Custom Shadows**: Dialog and popover shadows
- **Responsive Utilities**: Mobile and desktop specific styles
- **Editor Styling**: Custom Lexical editor theme

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

### Environment Variables
Ensure all required environment variables are set in production:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY`
- `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY`

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server on port 5000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Structure
- **Components**: Reusable React components with TypeScript
- **Server Actions**: Next.js server actions for API operations
- **Type Safety**: Comprehensive TypeScript definitions
- **State Management**: React hooks and Liveblocks for state
- **Error Handling**: Comprehensive error handling throughout

### Key Utilities
- **parseStringify**: JSON serialization utility
- **getAccessType**: Permission mapping utility
- **dateConverter**: Relative time formatting
- **getUserColor**: User color assignment algorithm
- **cn**: Class name merging utility

### API Endpoints
- **POST /api/liveblocks-auth**: Liveblocks user authentication
- **Server Actions**: Document and user management operations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use shadcn/ui components for consistency
- Maintain responsive design principles
- Test real-time collaboration features
- Follow the existing code structure

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔮 Roadmap

- [ ] Document templates
- [ ] Export to PDF/Word
- [ ] Version history
- [ ] Advanced search
- [ ] Mobile app
- [ ] Offline support
- [ ] Advanced formatting options
- [ ] Document analytics
- [ ] Real-time cursors
- [ ] Document folders
- [ ] Advanced sharing options
- [ ] Document comments export

## 🙏 Acknowledgments

- [Liveblocks](https://liveblocks.io) for real-time collaboration infrastructure
- [Clerk](https://clerk.com) for authentication and user management
- [Lexical](https://lexical.dev) for the text editor framework
- [Next.js](https://nextjs.org) for the React framework
- [Tailwind CSS](https://tailwindcss.com) for styling utilities
- [shadcn/ui](https://ui.shadcn.com) for component library
- [Radix UI](https://www.radix-ui.com) for accessible components

## 📊 Technical Specifications

### Performance
- **Bundle Size**: Optimized with Next.js
- **Real-time Latency**: Sub-second collaboration updates
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Support**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Graceful degradation

### Accessibility
- **WCAG Compliance**: Following accessibility guidelines
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Color Contrast**: High contrast ratios

---

**Sync Docs** - Empowering teams with real-time collaborative document editing.
