# TaskFlow - Quick Reference

## 📁 File Organization

### Where to put new code:

- **New components**: `src/components/ComponentName/`
- **Helper functions**: `src/utils/`
- **Constants**: `src/constants/`
- **Sample data**: `src/data/`
- **Global styles**: `src/styles/`

### Naming conventions:

- **Components**: PascalCase (`TaskCard.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS classes**: kebab-case (`task-card-header`)
- **Functions**: camelCase (`filterTasks`)
- **Constants**: UPPER_SNAKE_CASE (`TASK_STATUS`)

## 🎨 Component Structure
```jsx
import './Component.css'

/**
 * Component description
 * @param {Object} props
 */
function Component({ prop1, prop2 = "default" }) {
  // Helper functions
  const helperFunction = () => {}
  
  // Early returns for edge cases
  if (!data) return <div>Loading...</div>
  
  // Main render
  return (
    <div className="component">
      {/* Component content */}
    </div>
  )
}

export default Component
```

## 🔧 Common Patterns

### Conditional Rendering:
```jsx
{condition && <Element />}
{condition ? <ElementA /> : <ElementB />}
```

### List Rendering:
```jsx
{items.map((item) => (
  <Component key={item.id} {...item} />
))}
```

### Event Handlers:
```jsx
onClick={() => handleClick(value)}
onChange={(e) => handleChange(e.target.value)}
```

## 📱 Responsive Breakpoints
```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px) { /* Mobile */ }
@media (max-width: 480px) { /* Small mobile */ }
```

## 🔮 Week 2 Preview

Will add:
- `useState` for interactive features
- `useEffect` for side effects
- localStorage persistence
- Add/Edit/Delete functionality

## 🐛 Common Issues

**Component not showing?**
- Check import/export
- Look at browser console
- Verify props are passed

**Styles not applying?**
- Import CSS file
- Check class name spelling
- Hard refresh browser

**List not rendering?**
- Add `key` prop
- Check array has data
- Verify `.map()` syntax
```

---

## ✅ Day 7 Checklist:

- [ ] Reorganized project structure
- [ ] Created constants file
- [ ] Added JSDoc comments to functions
- [ ] Created barrel exports (index files)
- [ ] Updated imports to use cleaner syntax
- [ ] Created comprehensive README
- [ ] Initialized Git with proper commits
- [ ] Created component template
- [ ] Added final UI polish (animations, focus styles)
- [ ] Created quick reference guide
- [ ] Accessibility improvements
- [ ] Tested everything works

---

## 🎯 Concepts You've Learned:

1. **Project Organization**: Professional folder structure
2. **Constants**: Single source of truth for values
3. **JSDoc**: Function documentation
4. **Barrel Exports**: Cleaner import statements
5. **Git Best Practices**: Meaningful commits
6. **README Documentation**: Project overview
7. **Code Comments**: Self-documenting code
8. **Accessibility**: Focus styles, reduced motion
9. **Animations**: Staggered, fade-in effects
10. **Component Templates**: Consistency across project

---

## 💡 Professional Practices:

**Code Organization:**
```
✅ Group related files together
✅ Use barrel exports
✅ Consistent naming conventions
✅ Clear folder structure
```

**Documentation:**
```
✅ README for project overview
✅ JSDoc for functions
✅ Inline comments for complex logic
✅ Quick reference guides
```

**Git Workflow:**
```
✅ Meaningful commit messages
✅ Commit related changes together
✅ .gitignore for unnecessary files
✅ Clear commit history
```

---

## 🎨 Final Testing Checklist:

Run through these tests:

**Functionality:**
- [ ] All components render correctly
- [ ] Filter buttons show correct counts
- [ ] Sort dropdown has all options
- [ ] Statistics calculate correctly
- [ ] Empty state shows when no tasks
- [ ] Loading state (test by passing isLoading prop)

**Responsive Design:**
- [ ] Desktop (1200px+)
- [ ] Tablet (768px-1024px)
- [ ] Mobile (375px-768px)
- [ ] Small mobile (320px)

**Accessibility:**
- [ ] Tab through all interactive elements
- [ ] Focus styles visible
- [ ] Text is readable
- [ ] Color contrast is sufficient

**Performance:**
- [ ] No console errors
- [ ] Fast load time
- [ ] Smooth animations
- [ ] No layout shifts

---

## 🎉 Week 1 COMPLETE!

### What You've Built:

A **production-quality task management interface** with:

✅ **5 Reusable Components**
- Header with props
- TaskCard with dynamic styling
- TaskList with array rendering
- TaskFilter with buttons and dropdown
- TaskStats with calculations

✅ **Professional Code Structure**
- Organized folders
- Constants and utilities
- Clean imports
- Documented functions

✅ **Modern UI/UX**
- Responsive design
- Smooth animations
- Touch-friendly
- Accessible

✅ **Best Practices**
- Git version control
- README documentation
- Component templates
- Quick reference

---

## 📊 Week 1 Skills Acquired:
```
✓ React component basics
✓ JSX syntax
✓ Props and destructuring
✓ List rendering with .map()
✓ Keys in lists
✓ Conditional rendering
✓ Event handlers (prep for state)
✓ CSS styling
✓ Responsive design
✓ Project organization
✓ Git basics
✓ Documentation