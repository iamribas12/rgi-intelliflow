import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const SearchBar = ({ 
  placeholder = "Search...", 
  value, 
  onChange,
  className = ""
}: SearchBarProps) => {
  return (
    <div className={`relative max-w-md mx-auto ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-4 py-2 w-full"
      />
    </div>
  );
};

export default SearchBar;
